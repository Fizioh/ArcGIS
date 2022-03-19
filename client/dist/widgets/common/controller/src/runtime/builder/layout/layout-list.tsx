import { React, classNames, IMLayoutJson, WidgetState, ReactRedux, IMState } from 'jimu-core'
import { ScrollListProps, ScrollList, ScrollRefProps } from '../../common/scroll-list'
import { getListItemLength } from '../../common/utils'
import { BASE_LAYOUT_NAME, DROP_ZONE_PLACEHOLDER_WIDTH } from '../../../common/consts'
import { AvatarCardProps, getItemLength } from '../../common/avatar-card'
import { LayoutContext } from 'jimu-layouts/layout-runtime'
import { DrapZone } from './drop-zone'
import { LayoutItem } from './layout-item'
import { isLayoutItemAcceptedForController, useDeleteSyncWidgetFromLayout, useInsertSyncWidgetToLayout } from '../utils'
import { InsertWidget } from './insert-widget'
import { IconPosition } from 'jimu-ui'
import { getBuilderThemeVariables } from 'jimu-theme'
import { getVisibleOrderFromLayout, useControlledWidgets, useWidgetChildLayoutJson } from '../../common/layout-utils'
const { useMemo, forwardRef } = React

export interface LayoutListProps extends Omit<ScrollListProps, 'lists' | 'createItem' | 'itemLength'> {
  widgetId: string
  itemStyle?: AvatarCardProps
  draggable?: boolean
  space: number
  dropZoneRef?: (ref: HTMLDivElement) => void
  onItemClick?: (evt: React.MouseEvent<HTMLDivElement>) => void
  scrollListRef?: React.RefObject<ScrollRefProps>
}

const useInsertWidgetPlaceholder = (layout: IMLayoutJson, item: AvatarCardProps, empty: boolean, insertSyncWidgetToLayout) => {
  return useMemo(() => {
    const avatarProps = {
      ...item,
      showLabel: !empty ? item?.showLabel : false,
      avatar: item?.avatar
    }
    const itemLength = getItemLength(item?.avatar?.size, item?.showLabel, item?.avatar?.shape)
    return {
      position: 'end' as IconPosition,
      length: itemLength,
      node: <InsertWidget className="scroll-list-item" insertSyncWidgetToLayout={insertSyncWidgetToLayout} layout={layout} item={avatarProps} />
    }
  }, [item, layout, empty, insertSyncWidgetToLayout])
}

export const LayoutList = forwardRef((props: LayoutListProps, ref: React.RefObject<HTMLDivElement>) => {
  const { widgetId, draggable, itemStyle, vertical, className, space, dropZoneRef, onItemClick, onClick, scrollListRef, ...others } = props
  const layouts = ReactRedux.useSelector((state: IMState) => state.appConfig.widgets?.[widgetId]?.layouts?.[BASE_LAYOUT_NAME])
  const layout = useWidgetChildLayoutJson(widgetId, BASE_LAYOUT_NAME)
  const order = getVisibleOrderFromLayout(layout)
  const builderTheme = getBuilderThemeVariables()
  //Get all open state widgets in controller
  const widgets = useControlledWidgets(widgetId, BASE_LAYOUT_NAME)
  const openingWidgets = Object.keys(widgets).filter((widgetId) => widgets[widgetId].state === WidgetState.Opened)
  const itemLength = getListItemLength(itemStyle, space)
  const placeholderProps = {
    color: builderTheme?.colors.palette.primary[700],
    size: [itemLength, DROP_ZONE_PLACEHOLDER_WIDTH]
  }

  const removeSyncWidgetFromLayout = useDeleteSyncWidgetFromLayout(widgetId, BASE_LAYOUT_NAME)

  const createItem = (itemId: string, className: string) => {
    const layoutItem = layout.content[itemId]
    const widgetId = (layoutItem && layoutItem.widgetId) || ''
    const active = openingWidgets.includes(widgetId)

    return (
      <LayoutItem
        {...itemStyle}
        key={itemId}
        className={classNames(`layout-${layout?.id}-item layout-item`, className)}
        widgetid={widgetId}
        layoutId={layout.id}
        layoutItemId={itemId}
        draggable={draggable}
        markerEnabled={true}
        layoutItem={layoutItem}
        active={active}
        removeWidget={removeSyncWidgetFromLayout}
        onClick={onItemClick}
      />
    )
  }
  const insertSyncWidgetToLayout = useInsertSyncWidgetToLayout(widgetId, BASE_LAYOUT_NAME)
  const placeholder = useInsertWidgetPlaceholder(layout, itemStyle, order.length === 0, insertSyncWidgetToLayout)

  return (
    <LayoutContext.Provider value={{ isItemAccepted: isLayoutItemAcceptedForController }}>
      <div
        ref={ref}
        className="layout controller-layout w-100 h-100"
        data-layoutid={layout.id}
        onClick={onClick}
      >
        <DrapZone
          widgetId={widgetId}
          vertical={vertical}
          layout={layout}
          childClass={`layout-${layout.id}-item`}
          placeholder={placeholderProps}
          layouts={layouts}
        />
        <ScrollList
          {...others}
          scrollRef={scrollListRef}
          className={classNames(className, 'layout-item-list')}
          vertical={vertical}
          placeholder={placeholder}
          itemLength={itemLength}
          space={space}
          autoHideArrow
          lists={order as any}
          autoScrollEnd={true}
          createItem={createItem}
        />
      </div>
    </LayoutContext.Provider>
  )
})
