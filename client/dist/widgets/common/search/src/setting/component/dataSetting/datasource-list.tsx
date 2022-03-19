/** @jsx jsx */
import { React, ReactRedux, jsx, ImmutableArray, UseDataSource, IMState, IMWidgetJson, defaultMessages as jimuCoreDefaultMessage } from 'jimu-core'
import { List, TreeItemType, TreeItemsType, TreeItemActionType } from 'jimu-ui/basic/list-tree'
import { Alert, hooks, defaultMessages as jimuUiDefaultMessage } from 'jimu-ui'
import { IMConfig, DatasourceConfigItem, SearchServiceType } from '../../../config'
const IconClose = require('jimu-ui/lib/icons/close.svg')
interface SearchOptionsProps {
  id: string
  showSourcePanel: boolean
  showNewSourceItem: boolean
  dsConfigItemIndex: number
  config: IMConfig
  datasourceConfig: ImmutableArray<DatasourceConfigItem>
  useDataSources: ImmutableArray<UseDataSource>
  className?: string
  onDsConfigIdChange: (configItemIndex: number, isGeocodeSource?: boolean) => void
  updateConfigForLayerOptions: (newConfig?: IMConfig) => void
  hideSidePopper: () => void
}

const DatasourceList = (props: SearchOptionsProps) => {
  const nls = hooks.useTranslate(jimuCoreDefaultMessage, jimuUiDefaultMessage)
  const { className, datasourceConfig, useDataSources, config, dsConfigItemIndex, showSourcePanel, showNewSourceItem, id, onDsConfigIdChange, updateConfigForLayerOptions, hideSidePopper } = props
  const widgetsJson: IMWidgetJson = ReactRedux.useSelector((state: IMState) => state?.appStateInBuilder?.appConfig?.widgets?.[id])
  const AdvancedActionMap = {
    isItemFocused: (actionData, refComponent) => {
      const { itemJsons: [currentItemJson, parentArray] } = refComponent.props
      return showSourcePanel && parentArray.indexOf(currentItemJson) === dsConfigItemIndex
    },
    overrideItemBlockInfo: ({ itemBlockInfo }, refComponent) => {
      return {
        name: TreeItemActionType.RenderOverrideItem,
        children: [{
          name: TreeItemActionType.RenderOverrideItemDroppableContainer,
          children: [{
            name: TreeItemActionType.RenderOverrideItemDraggableContainer,
            children: [{
              name: TreeItemActionType.RenderOverrideItemBody,
              children: [{
                name: TreeItemActionType.RenderOverrideItemMainLine,
                children: [{
                  name: TreeItemActionType.RenderOverrideItemDragHandle
                }, {
                  name: TreeItemActionType.RenderOverrideItemIcon,
                  autoCollapsed: true
                }, {
                  name: TreeItemActionType.RenderOverrideItemTitle
                }, {
                  name: TreeItemActionType.RenderOverrideItemDetailToggle
                }, {
                  name: TreeItemActionType.RenderOverrideItemCommands
                }]
              }]
            }]
          }]
        }]
      }
    }
  }

  const isDataSourceAccessible = (dataSourceId: string, isOutputDs: boolean = false) => {
    let isDataSourceInProps
    if (isOutputDs) {
      const outputDs = widgetsJson?.outputDataSources || []
      isDataSourceInProps = outputDs?.filter(dsId => dataSourceId === dsId).length > 0
    } else {
      isDataSourceInProps = useDataSources?.filter(useDs => dataSourceId === useDs.dataSourceId).length > 0
    }
    return isDataSourceInProps && dataSourceId
  }

  const onRemoveLayerButtonClick = (dsIndex: number) => {
    const newDatasourceConfig = datasourceConfig?.asMutable({ deep: true })
    newDatasourceConfig?.splice(dsIndex, 1)
    const newConfig = config.setIn(['datasourceConfig'], newDatasourceConfig)
    updateConfigForLayerOptions(newConfig)
    hideSidePopper()
  }

  return (
    <div className={`w-100 mt-2 ${className || ''}`}>
      <List
        className='w-100'
        itemsJson={Array.from(datasourceConfig).map((item, index) => ({
          itemStateDetailContent: item,
          itemKey: `${index}`,
          itemStateTitle: item?.label,
          itemStateIcon: { icon: item.icon?.svg },
          itemStateCommands: [
            {
              label: nls('deleteOption'),
              iconProps: () => ({ icon: IconClose, size: 12 }),
              action: () => {
                onRemoveLayerButtonClick(index)
              }
            }
          ]
        }))}
        dndEnabled
        renderOverrideItemDetailToggle={(actionData, refComponent) => {
          const { itemJsons } = refComponent.props
          const [currentItemJson] = itemJsons
          const itemStateDetailContent = currentItemJson?.itemStateDetailContent
          const isGeocodeService = itemStateDetailContent?.searchServiceType === SearchServiceType.GeocodeService
          const dsId = isGeocodeService ? itemStateDetailContent?.outputDataSourceId : itemStateDetailContent?.useDataSource?.dataSourceId
          return !isDataSourceAccessible(dsId, isGeocodeService)
            ? <Alert
              buttonType='tertiary'
              form='tooltip'
              size='small'
              type='error'
              text={nls('dataSourceCreateError')}
            >
            </Alert>
            : ''
        }}
        onUpdateItem={(actionData, refComponent) => {
          const { itemJsons } = refComponent.props
          const [, parentItemJson] = itemJsons as [TreeItemType, TreeItemsType]
          const newDatasourceConfig = parentItemJson.map(item => {
            return item.itemStateDetailContent
          })
          const newConfig = config.setIn(['datasourceConfig'], newDatasourceConfig)
          onDsConfigIdChange(null)
          updateConfigForLayerOptions(newConfig)
        }}
        onClickItemBody={(actionData, refComponent) => {
          const { itemJsons: [currentItemJson] } = refComponent.props
          const isGeocodeSource = currentItemJson?.itemStateDetailContent?.searchServiceType === SearchServiceType.GeocodeService
          onDsConfigIdChange(+currentItemJson.itemKey, isGeocodeSource)
        }}
        {...AdvancedActionMap}
      />

      {showNewSourceItem && <List
        className='setting-ui-unit-list-new'
        itemsJson={[{
          name: '......'
        }].map((item, x) => ({
          itemStateDetailContent: 'item',
          itemKey: 'index',
          itemStateTitle: '......',
          itemStateCommands: []
        }))}
        dndEnabled={false}
        renderOverrideItemDetailToggle={() => '' }
        {...AdvancedActionMap}
        isItemFocused={() => true}
      />}
    </div>
  )
}

export default DatasourceList
