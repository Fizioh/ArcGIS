/** @jsx jsx */
import { React, jsx, css, ReactRedux, UseDataSource, ImmutableArray, IMWidgetJson, IMState, DataSourceTypes, polished, defaultMessages as jimuCoreDefaultMessage, Immutable } from 'jimu-core'
import { hooks, Dropdown, DropdownButton, DropdownMenu, DropdownItem, defaultMessages as jimuiDefaultMessage } from 'jimu-ui'
import { SettingChangeFunction, getAppConfigAction } from 'jimu-for-builder'
import { SettingSection, SettingRow } from 'jimu-ui/advanced/setting-components'
import { IMConfig, DatasourceConfigItem, SearchServiceType } from '../../../config'
import { PlusOutlined } from 'jimu-icons/outlined/editor/plus'
import defaultMessage from '../../translations/default'
import LayerSourcePanel from './set-layer-source-side-popper'
import LocatorSourcePanel from './set-locator-source'
import DatasourceList from './datasource-list'
import { isDsInDatasources, checkIsWidgetJsonDsChanged, getInitSchema } from '../../util'
import { useTheme } from 'jimu-theme'
const { useSelector } = ReactRedux
const { useRef, useEffect } = React
interface DataSettingProps {
  id: string
  useDataSources: ImmutableArray<UseDataSource>
  onSettingChange: SettingChangeFunction
  config: IMConfig
}

const DataSetting = (props: DataSettingProps) => {
  const nls = hooks.useTranslate(defaultMessage, jimuiDefaultMessage, jimuCoreDefaultMessage)
  const appTheme = useTheme()

  const { config, id, useDataSources, onSettingChange } = props
  const sourceListRef = useRef<HTMLDivElement>(null)
  const sidePopperTrigger = useRef<HTMLDivElement>(null)

  const [open, setOpen] = React.useState(false)
  const [showLayerSourcePanel, setShowLayerSourcePanel] = React.useState(false)
  const [showLocatorSourcePanel, setShowLocatorSourcePanel] = React.useState(false)
  const [showNewSourceItem, setShowNewSourceItem] = React.useState(false)
  const [dsConfigItemIndex, setDsConfigItemIndex] = React.useState(null)
  const [popperFocusNode, setPopperFocusNode] = React.useState(null as HTMLElement)
  const widgetsJson: IMWidgetJson = useSelector((state: IMState) => state?.appStateInBuilder?.appConfig?.widgets?.[id])

  const DropDownStyle = css`
    & {
      background-color: ${appTheme.colors?.palette?.secondary?.[400]};
    }
  `

  const STYLE = css`
    .data-remind {
      color: ${appTheme.colors?.palette?.dark?.[500]};
      font-size: ${polished.rem(12)};
    }
  `
  useEffect(() => {
    checkAndInitOutputDs()
    // eslint-disable-next-line
  }, [config])

  /**
   * Check is output datasource in current widget json, if not, create output datasource
  */
  const checkAndInitOutputDs = () => {
    const outputDataSources = widgetsJson?.outputDataSources || []
    const datasourceConfig = config?.datasourceConfig || []
    for (const i in datasourceConfig) {
      const dsConfigItem = datasourceConfig[i]
      if (dsConfigItem?.searchServiceType === SearchServiceType.FeatureService) continue
      const ouputDsId = dsConfigItem?.outputDataSourceId
      if (!outputDataSources?.includes(ouputDsId)) {
        updateConfigForLayerOptions(config)
        break
      }
    }
  }

  /**
   * Toggle new search source dropdown list
   */
  const toggleNewSource = () => {
    setOpen(!open)
  }

  /**
   * Fire callback after add new source
   */
  const onDsConfigIdChange = (configItemIndex: number, isGeocodeSource?: boolean) => {
    if (!(typeof (configItemIndex) === 'number')) {
      hideSidePopper()
      return
    }
    setSidePopperAnchor(configItemIndex, false)
    if (dsConfigItemIndex === configItemIndex) {
      if (isGeocodeSource) {
        setShowLocatorSourcePanel(!showLocatorSourcePanel)
        setShowLayerSourcePanel(false)
      } else {
        setShowLayerSourcePanel(!showLayerSourcePanel)
        setShowLocatorSourcePanel(false)
      }
    } else {
      setDsConfigItemIndex(configItemIndex)
      if (isGeocodeSource) {
        setShowLocatorSourcePanel(true)
        setShowLayerSourcePanel(false)
      } else {
        setShowLayerSourcePanel(true)
        setShowLocatorSourcePanel(false)
      }
    }
  }

  /**
   * Close side popper
   */
  const hideSidePopper = () => {
    setShowLocatorSourcePanel(false)
    setShowLayerSourcePanel(false)
    setDsConfigItemIndex(null)
  }

  const opentSourcePanel = (isLayerSource: boolean) => {
    const isShowSourcePanel = isLayerSource ? !showLocatorSourcePanel : !showLayerSourcePanel
    setShowNewSourceItem(isShowSourcePanel)
    if (isShowSourcePanel) {
      const index = config?.datasourceConfig?.length || 0
      setDsConfigItemIndex(index)
      setSidePopperAnchor(index, true)
    }
    isLayerSource ? setShowLayerSourcePanel(isShowSourcePanel) : setShowLocatorSourcePanel(isShowSourcePanel)
  }

  const showSourcePanel = () => {
    const isGeocodeSource = config?.datasourceConfig?.[dsConfigItemIndex]?.searchServiceType === SearchServiceType.GeocodeService
    return isGeocodeSource ? showLocatorSourcePanel : showLayerSourcePanel
  }

  /**
   * Update config after datasources config change
   */
  const updateConfigForLayerOptions = (newConfig: IMConfig) => {
    if (checkIsNewLayer(newConfig)) {
      setShowNewSourceItem(false)
    }
    const allDataSources = getAllDatasource(newConfig?.datasourceConfig)
    updateDsInWidgetJson(allDataSources)
    onSettingChange({ id, config: newConfig }, allDataSources.outputDataSources)
  }

  /**
   * Get all useDatasources and outputDatasources
   */
  const getAllDatasource = (datasourceConfig: ImmutableArray<DatasourceConfigItem>) => {
    const allDataSources = datasourceConfig?.asMutable({ deep: true })?.reduce((currentDsMap, dsCogfigItem) => {
      // add useDataSource
      const useDataSource = dsCogfigItem?.useDataSource
      if (useDataSource && !isDsInDatasources(useDataSource, currentDsMap?.useDataSources)) {
        currentDsMap?.useDataSources.push(useDataSource)
      }

      // add outputDataSource
      const outputDsJson = getOutputDsJson(dsCogfigItem)
      outputDsJson && currentDsMap.outputDataSources.push(outputDsJson)
      return currentDsMap
    }, { useDataSources: [] as UseDataSource[], outputDataSources: [] })
    return allDataSources
  }

  const getOutputDsJson = (dsCogfigItem: DatasourceConfigItem) => {
    let outputDataSourceJson
    if (dsCogfigItem?.searchServiceType === SearchServiceType.GeocodeService) {
      outputDataSourceJson = {
        id: dsCogfigItem?.outputDataSourceId,
        type: DataSourceTypes.FeatureLayer,
        label: dsCogfigItem?.label,
        originDataSources: [],
        isOutputFromWidget: true,
        isDataInDataSourceInstance: false,
        schema: getInitSchema(dsCogfigItem?.label),
        geometryType: 'esriGeometryPoint'
      }
    }
    return outputDataSourceJson
  }

  /**
   * Fire callback when select layer.
   */
  const updateDsInWidgetJson = (allDataSources) => {
    const udpateWidgetJson = { id: id } as any
    const appConfigAction = getAppConfigAction()
    // Instead of function onSettingChange, use action to change widget json, which can avoid conflict.
    // Because editing widget json in builder needs pub-sub and pub-sub is async.
    udpateWidgetJson.useDataSources = allDataSources?.useDataSources
    udpateWidgetJson.outputDataSources = allDataSources?.outputDataSources?.map(outputDs => {
      return outputDs?.id
    })
    if (checkIsWidgetJsonDsChanged(widgetsJson, udpateWidgetJson.useDataSources, udpateWidgetJson.outputDataSources)) {
      appConfigAction.editWidget(udpateWidgetJson).exec()
    }
  }

  /**
   * Check is a new layer
   */
  const checkIsNewLayer = (newConfig: IMConfig) => {
    return newConfig?.datasourceConfig?.length !== config?.datasourceConfig?.length
  }

  const locatorSourcePanelToggle = () => {
    setShowLocatorSourcePanel(!showLocatorSourcePanel)
    setShowNewSourceItem(false)
  }

  const setSidePopperAnchor = (index?: number, newAdded = false) => {
    let node: any
    if (newAdded) {
      node = sidePopperTrigger.current.getElementsByClassName('add-search-btn')[0]
    } else {
      node = sidePopperTrigger.current.getElementsByClassName('jimu-tree-item__body')[index]
    }
    setPopperFocusNode(node)
  }

  return (
    <SettingSection css={STYLE}>
      <SettingRow flow='wrap'>
        <span className='w-100 data-remind'>{nls('addSources')}</span>
      </SettingRow>

      <SettingRow flow='wrap'>
        <div className='w-100' ref={sidePopperTrigger}>
          <Dropdown className='w-100' size='sm' toggle={toggleNewSource} isOpen={open} autoWidth={true}>
            <DropdownButton className='add-search-btn w-100' arrow={false} icon type='primary'>
              <PlusOutlined className='mr-1 d-inline-block' autoFlip/>
              {nls('newSearchSource')}
            </DropdownButton>
            <DropdownMenu css={DropDownStyle}>
              <DropdownItem className='w-100' onClick={() => { opentSourcePanel(true) }}>{nls('layerSource')}</DropdownItem>
              <DropdownItem className='w-100' onClick={() => { opentSourcePanel(false) }}>{nls('locatorSource')}</DropdownItem>
            </DropdownMenu>
          </Dropdown>

          {/* datasource list */}
          <div className='w-100' ref={sourceListRef}>
            <DatasourceList
              id={id}
              dsConfigItemIndex={dsConfigItemIndex}
              datasourceConfig={config?.datasourceConfig || Immutable([])}
              config={config}
              showSourcePanel={showSourcePanel()}
              useDataSources={useDataSources}
              onDsConfigIdChange={onDsConfigIdChange}
              showNewSourceItem={showNewSourceItem}
              updateConfigForLayerOptions={updateConfigForLayerOptions}
              hideSidePopper={hideSidePopper}
            />
          </div>
        </div>

        {/* Set layer source */}
        <LayerSourcePanel
          id={id}
          dsConfigItemIndex={dsConfigItemIndex}
          useDataSources={useDataSources}
          isOpen={showLayerSourcePanel}
          config={config}
          onSettingChange={onSettingChange}
          trigger={sourceListRef?.current}
          updateConfigForLayerOptions={updateConfigForLayerOptions}
          toggle={() => { setShowLayerSourcePanel(!showLayerSourcePanel); setShowNewSourceItem(false) }}
          popperFocusNode={popperFocusNode}
        />

        {/* Set locator source */}
        <LocatorSourcePanel
          id={id}
          dsConfigItemIndex={dsConfigItemIndex}
          useDataSources={useDataSources}
          isOpen={showLocatorSourcePanel}
          onSettingChange={onSettingChange}
          updateConfigForLayerOptions={updateConfigForLayerOptions}
          config={config}
          trigger={sourceListRef?.current}
          toggle={locatorSourcePanelToggle}
          popperFocusNode={popperFocusNode}
        />
      </SettingRow>
    </SettingSection>
  )
}

export default DataSetting
