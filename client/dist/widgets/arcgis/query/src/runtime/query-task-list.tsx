/** @jsx jsx */
import { jsx, css, React, ImmutableArray, Immutable } from 'jimu-core'
import { List, TreeItemActionType } from 'jimu-ui/basic/list-tree'
import { QueryItemType } from '../config'
import { QueryTaskListItem } from './query-task-list-item'
import { QueryTask } from './query-task'

export interface QueryTaskListProps {
  widgetId: string
  queryItems: ImmutableArray<QueryItemType>
  className?: string
}

const blockInfo = () => {
  return {
    name: TreeItemActionType.RenderOverrideItem,
    children: [
      {
        name: TreeItemActionType.RenderOverrideItemBody,
        children: [
          {
            name: TreeItemActionType.RenderOverrideItemMainLine
          }
        ]
      }
    ]
  }
}

// show task label and an arrow to the task content
export function QueryTaskList (props: QueryTaskListProps) {
  const { queryItems, widgetId, className = '' } = props
  const [stage, setStage] = React.useState(0)
  const [disabledList, setDisabledList] = React.useState(Immutable({}))
  const [selectedIndex, setSelectedIndex] = React.useState(0)

  const handleTaskSelected = (index) => {
    setStage(1)
    setSelectedIndex(index)
  }

  const handleTaskStatusChange = React.useCallback((index, enabled) => {
    const id = queryItems[index].configId
    setDisabledList(disabledList.set(id, !enabled))
  }, [queryItems, disabledList])

  const generateItemJson = React.useCallback(() => {
    return Array.from(queryItems).map((queryItem, index) => ({
      itemStateDetailContent: queryItem,
      itemStateDisabled: disabledList[queryItem.configId] ?? false,
      itemKey: `${index}`
    }))
  }, [queryItems, disabledList])

  const handleNavBack = () => {
    setStage(0)
    setSelectedIndex(-1)
  }

  return (
    <div className={`runtime-query__query-list h-100 ${className}`} css={css`.jimu-tree-item__body {width: 100%;}`}>
      {stage === 0 && queryItems.length > 1 && (
        <List
          itemsJson={generateItemJson()}
          isItemFocused={() => false}
          overrideItemBlockInfo={blockInfo}
          onClickItemBody={(actionData, refComponent) => {
            const { itemJsons } = refComponent.props
            const currentItemJson = itemJsons[0]
            const index = +currentItemJson.itemKey
            handleTaskSelected(index)
          }}
          renderOverrideItemMainLine={(actionData, refComponent) => {
            const { itemJsons } = refComponent.props
            const currentItemJson = itemJsons[0]
            const queryItem = currentItemJson.itemStateDetailContent
            const index = +currentItemJson.itemKey
            return (
              <QueryTaskListItem
                key={queryItem.configId}
                index={index}
                queryItem={queryItem}
                onStatusChange={(enabled: boolean) => { handleTaskStatusChange(index, enabled) }}
              />
            )
          }}
        />
      )}

      {(stage === 1 || queryItems.length === 1) && (
        <QueryTask
          widgetId={widgetId}
          index={queryItems.length > 1 ? selectedIndex : 0}
          total={queryItems.length}
          queryItem={queryItems[queryItems.length > 1 ? selectedIndex : 0]}
          onNavBack={handleNavBack}
        />
      )}
    </div>
  )
}
