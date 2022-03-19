/** @jsx jsx */
import { React, jsx, css, FieldSchema, Immutable, JimuFieldType, IMFieldSchema, UseDataSource } from 'jimu-core'
import { useTheme } from 'jimu-theme'
import { dataComponentsUtils, FieldSelector } from 'jimu-ui/advanced/data-source-selector'
import { List, TreeItemType, TreeItemsType, TreeItemActionType } from 'jimu-ui/basic/list-tree'
interface DisplayFieldProps {
  disPlayField: FieldSchema[]
  useDataSource: UseDataSource
  onFieldChange: (allSelectedFields: IMFieldSchema[], preFields, isDisplayField?: boolean) => void
}

const DisplayFieldSelect = (props: DisplayFieldProps) => {
  const advancedActionMap = {
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
                  name: TreeItemActionType.RenderOverrideItemCommands
                }]
              }]
            }]
          }]
        }]
      }
    }
  }

  const STYLE = css`
    &{
      max-height: 256px;
      overflow-y: auto;
    }
  `

  const theme = useTheme()

  const { disPlayField, useDataSource, onFieldChange } = props

  return (
    <div className='w-100'>
      <FieldSelector
        useDataSources={ useDataSource ? Immutable([useDataSource]) : Immutable([]) }
        onChange={(allSelectedFields) => { onFieldChange(allSelectedFields, disPlayField, true) }}
        selectedFields={Immutable(disPlayField?.map(field => field?.name))}
        isMultiple
        isSearchInputHidden={false}
        isDataSourceDropDownHidden
        useDropdown
        useMultiDropdownBottomTools
        types={Immutable([JimuFieldType.Number, JimuFieldType.String])}
      />
      <div css={STYLE}>
        <List
          size='sm'
          className='mt-2'
          itemsJson={Array.from(disPlayField).map((field, index) => ({
            itemStateDetailContent: field,
            itemKey: `${field?.name}${index}`,
            itemStateIcon: dataComponentsUtils.getIconFromFieldType(field.type, theme),
            itemStateTitle: field.alias || field.jimuName || field.name,
            itemStateCommands: []
          }))}
          dndEnabled
          onUpdateItem={(actionData, refComponent) => {
            const { itemJsons } = refComponent.props
            const [, parentItemJson] = itemJsons as [TreeItemType, TreeItemsType]
            const newDisplayField = parentItemJson.map(item => {
              return item.itemStateDetailContent
            })
            onFieldChange(newDisplayField, disPlayField, true)
          }}
          isItemFocused={() => false}
          {...advancedActionMap}
        />
      </div>
    </div>
  )
}

export default DisplayFieldSelect
