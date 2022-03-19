/** @jsx jsx */
import { React, jsx, Immutable, UseDataSource, DataSourceManager, QueriableDataSource, css, ImmutableArray, FeatureLayerDataSource, SceneLayerDataSource, IMFieldSchema, JimuFieldType, DataSourceComponent, defaultMessages as jimuCoreDefaultMessage } from 'jimu-core'
import { SettingSection, SettingRow, SidePopper } from 'jimu-ui/advanced/setting-components'
import { SettingChangeFunction } from 'jimu-for-builder'
import { DataSourceSelector, FieldSelector, AllDataSourceTypes } from 'jimu-ui/advanced/data-source-selector'
import { IconPicker } from 'jimu-ui/advanced/resource-selector'
import { hooks, TextInput, Checkbox, defaultMessages as jimuiDefaultMessage } from 'jimu-ui'
import defaultMessage from '../../translations/default'
import { IMConfig, LayersConfig, IMDatasourceConfigItem, SearchServiceType } from '../../../config'
import { getOutputJsonOriginDs, getConfigIdList, getNewConfigId } from '../../util'
import DisplayFieldSelect from './display-field-select'
const { useEffect } = React
const SUPPORTED_TYPES = Immutable([AllDataSourceTypes.FeatureLayer, AllDataSourceTypes.SceneLayer])
interface LayerSourceSidePopperProps {
  id: string
  trigger: HTMLElement
  isOpen: boolean
  config: IMConfig
  dsConfigItemIndex: number
  toggle: () => void
  updateConfigForLayerOptions: (newConfig?: IMConfig) => void
  onSettingChange: SettingChangeFunction
  useDataSources: ImmutableArray<UseDataSource>
  popperFocusNode: HTMLElement
}

const LayerSourceSidePopper = (props: LayerSourceSidePopperProps) => {
  const nls = hooks.useTranslate(defaultMessage, jimuiDefaultMessage, jimuCoreDefaultMessage)
  const { trigger, isOpen, id, config, dsConfigItemIndex, popperFocusNode, toggle, updateConfigForLayerOptions, onSettingChange } = props
  const datasourceConfigItem = config?.datasourceConfig?.[dsConfigItemIndex] || Immutable({}) as unknown as IMDatasourceConfigItem
  const { configId, label, icon, searchFields, searchExact, displayFields, hint, useDataSource } = datasourceConfigItem as unknown as LayersConfig

  const [datasource, setDatasource] = React.useState(null)
  const [newLabel, setNewLabel] = React.useState(label)

  useEffect(() => {
    if (configId) {
      setNewLabel(label)
    }
    // eslint-disable-next-line
  }, [configId])

  /**
   * Create output datasource by useDatasource
   */
  const createOutputDsByUseDatasource = (useDataSource) => {
    DataSourceManager.getInstance().createDataSourceByUseDataSource(Immutable(useDataSource)).then((originDs: FeatureLayerDataSource | SceneLayerDataSource) => {
      const dsJsonOriginDs = getOutputJsonOriginDs(originDs)
      if (!dsJsonOriginDs) Promise.reject(Error(''))
      return dsJsonOriginDs
    }).then((dsJsonOriginDs: FeatureLayerDataSource) => {
      const { datasourceConfig } = getDatasourceConfig(dsJsonOriginDs, useDataSource)
      const newConfig = config.setIn(['datasourceConfig'], datasourceConfig)
      updateConfigForLayerOptions(newConfig)
    })
  }

  /**
   * Get layer default config
   */
  const getDatasourceConfig = (dsJsonOriginDs: FeatureLayerDataSource, useDataSource) => {
    const configIdList = getConfigIdList(config?.datasourceConfig?.asMutable({ deep: true }))
    const nextDsConfigId = configId || getNewConfigId(configIdList)
    let datasourceConfig = config?.datasourceConfig ? config.datasourceConfig.asMutable({ deep: true }) : [] as any
    const queryItemLabel = dsJsonOriginDs?.getLabel()
    const defaultField = getDefaultField(useDataSource)
    const dsConfigItem = {
      configId: nextDsConfigId,
      icon: null,
      label: queryItemLabel,
      displayLabel: true,
      useDataSource: useDataSource,
      displayFields: defaultField,
      searchFields: defaultField,
      hint: '',
      searchServiceType: SearchServiceType.FeatureService
    }
    if (datasourceConfigItem?.configId) {
      datasourceConfig = datasourceConfig.map(el => {
        if (el?.configId === nextDsConfigId) {
          return dsConfigItem
        } else {
          return el
        }
      })
    } else {
      datasourceConfig.push(dsConfigItem as any)
    }
    return {
      dsConfigItem: dsConfigItem,
      datasourceConfig: datasourceConfig
    }
  }

  /**
   * Get default field after add layer
  */
  const getDefaultField = (useDataSource: UseDataSource): IMFieldSchema[] => {
    const dsManager = DataSourceManager.getInstance()
    const ds = dsManager.getDataSource(useDataSource?.dataSourceId) as QueriableDataSource
    const displayFieldName = (ds as FeatureLayerDataSource).getLayerDefinition()?.displayField
    const fields = ds?.getSchema()?.fields
    let displayField
    const allFieldsData = []
    for (const fieldKey in fields) {
      if (fields?.[fieldKey]?.type !== JimuFieldType.Date) {
        allFieldsData.push(fields?.[fieldKey])
      }
      if (fields?.[fieldKey]?.name === displayFieldName) {
        displayField = fields?.[fieldKey]
      }
    }
    const defaultField = allFieldsData?.length > 1 ? allFieldsData[1] : allFieldsData[0]
    //If the feature layer has the Display field settings, the default search and display field should be the layer defined display field.
    return displayField ? [Immutable(displayField)] : [Immutable(defaultField)]
  }

  /**
   * Fire callback when datasource change.
   */
  const onDataChange = (useDataSources: UseDataSource[]) => {
    if (useDataSources && useDataSources.length > 0) {
      createOutputDsByUseDatasource(useDataSources[0])
    }
  }

  /**
   * Fire callback when searching fields change.
   */
  const onFieldChange = (allSelectedFields: IMFieldSchema[], preFields, isDisplayField: boolean = false) => {
    if (!allSelectedFields) return
    const fieldName = isDisplayField ? 'displayFields' : 'searchFields'

    let filteredFields = filterFields(allSelectedFields)
    //At least one field is selected
    if (filteredFields?.length === 0) {
      filteredFields = Immutable(preFields)?.asMutable({ deep: true })?.splice(0, 1)
    }

    const newDatasourceConfig = config?.datasourceConfig?.asMutable({ deep: true })
    const newDatasourceConfigItem: IMDatasourceConfigItem = datasourceConfigItem?.setIn([fieldName], filteredFields)
    newDatasourceConfig?.splice(dsConfigItemIndex, 1, newDatasourceConfigItem?.asMutable({ deep: true }))
    const newConfig = config.setIn(['datasourceConfig'], newDatasourceConfig)
    onSettingChange({ id, config: newConfig })
  }

  /**
   * Filter fields after fields changed
   */
  const filterFields = (newTableFields: IMFieldSchema[]) => {
    const fields = newTableFields?.filter(item => {
      return item?.type !== JimuFieldType?.Date
    })
    return fields
  }

  /**
   * Fire callback when change layer config.
   */
  const onConfigItemChange = (key: string[], value: any) => {
    const newDatasourceConfig = config?.datasourceConfig?.asMutable({ deep: true })
    const newDatasourceConfigItem = datasourceConfigItem?.setIn(key, value)
    newDatasourceConfig?.splice(dsConfigItemIndex, 1, newDatasourceConfigItem?.asMutable({ deep: true }))
    const newConfig = config.setIn(['datasourceConfig'], newDatasourceConfig)
    onSettingChange({ id, config: newConfig })
  }

  const handleCheckboxChange = (evt) => {
    const target = evt.currentTarget
    if (!target) return
    onConfigItemChange(['searchExact'], target.checked)
  }

  const handleLabelChange = (event) => {
    const value = event?.target?.value
    setNewLabel(value)
  }

  const handleLabelAccept = value => {
    if (!value) {
      setNewLabel(label)
    } else {
      setNewLabel(value?.trim())
      onConfigItemChange(['label'], value?.trim())
    }
  }

  const handleHintChange = (event) => {
    const value = event?.target?.value
    onConfigItemChange(['hint'], value)
  }

  /**
   * Fire callback when the datasource created.
   */
  const onDsCreate = ds => {
    setDatasource(ds)
  }

  /**
   * Render layer setting
   */
  const renderSourceSetting = () => {
    return (
      <div>
      <SettingSection>
        <SettingRow flow='wrap' label={nls('label')}>
          <TextInput size='sm' value={newLabel || ''} onAcceptValue={handleLabelAccept} onChange={handleLabelChange} className='w-100' placeholder={nls('findAddressOrPlace')}/>
        </SettingRow>
      </SettingSection>

      <SettingSection>
        <SettingRow label={nls('searchIcon')}>
          <IconPicker
            icon={icon}
            onChange={(icon) => { onConfigItemChange(['icon'], icon) }}
            configurableOption='none'
          />
        </SettingRow>
      </SettingSection>

      <SettingSection title={nls('searchOptions')}>
        <SettingRow flow='wrap' label={nls('selectSearchFields')}>
          <FieldSelector
            useDataSources={ useDataSource ? Immutable([useDataSource]) : Immutable([]) }
            onChange={(allSelectedFields) => { onFieldChange(allSelectedFields, searchFields) }}
            selectedFields={Immutable(searchFields?.map(field => field?.name))}
            isMultiple
            isSearchInputHidden={false}
            isDataSourceDropDownHidden
            useDropdown
            useMultiDropdownBottomTools
            types={Immutable([JimuFieldType.Number, JimuFieldType.String])}
          />
          <div className='mt-2'><Checkbox checked={searchExact} onClick={handleCheckboxChange} className='mr-1'/> {nls('exactMatch')}</div>
        </SettingRow>
        <SettingRow flow='wrap' label={nls('displayFields')}>
          <DisplayFieldSelect
            disPlayField={displayFields || []}
            onFieldChange={onFieldChange}
            useDataSource={useDataSource}
          />
        </SettingRow>
        <SettingRow flow='wrap' label={nls('searchHint')}>
          <TextInput size='sm' value={hint || ''} onChange={handleHintChange} className='w-100' placeholder={nls('findAddressOrPlace')}/>
        </SettingRow>
      </SettingSection>
      </div>
    )
  }

  const useDataSources = datasourceConfigItem?.useDataSource ? [datasourceConfigItem?.useDataSource?.asMutable({ deep: true })] : []
  return (
    <SidePopper isOpen={isOpen} position='right' toggle={toggle} trigger={trigger} title={nls('setLayerSource')} backToFocusNode={popperFocusNode}>
      <div className='w-100' css={css`height: calc(100% - 40px);overflow: auto;`}>
        {/* Datasource selector */}
        <SettingSection style={{ paddingTop: 0 }}>
          <SettingRow flow='wrap' label={nls('data')}>
            <DataSourceSelector
              closeDataSourceListOnChange
              types={SUPPORTED_TYPES}
              useDataSources={Immutable(useDataSources)}
              disableRemove={() => true}
              mustUseDataSource
              onChange={onDataChange}
              widgetId={id}
            />
          </SettingRow>
        </SettingSection>

        {/* Render layer setting */}
        {(datasourceConfigItem?.configId && datasource) && renderSourceSetting()}

        {useDataSources?.[0] && <div className='waiting-for-database'>
          <DataSourceComponent
            useDataSource={Immutable(useDataSources[0])}
            onDataSourceCreated={onDsCreate}
          />
        </div>}
      </div>
    </SidePopper>
  )
}

export default LayerSourceSidePopper
