import { React, ReactRedux, IMState, appActions, getAppStore, Size, Immutable, WidgetState } from 'jimu-core'
import { IMConfig, IMSizeMap } from '../../config'
import { LayoutList } from './layout/layout-list'
import { Placement } from 'jimu-ui'
import { ScrollRefProps } from '../common/scroll-list'
import { DummyLayout } from './layout/dummy-layout'
import { BASE_LAYOUT_NAME } from '../../common/consts'
import { getAppConfigAction } from 'jimu-for-builder'
import { useControlledWidgets } from '../common/layout-utils'
const { useSelector } = ReactRedux
const { useEffect, useRef, useState } = React

export interface BuilderProps {
  id: string
  config: IMConfig
  version?: number
}

export const Builder = (props: BuilderProps) => {
  const { id, config, version } = props
  const vertical = config?.behavior?.vertical
  const size = config.behavior?.size
  const placement: Placement = !vertical ? 'bottom' : 'right-start'

  const widgetsState = useSelector((state: IMState) => state.widgetsState[id])
  const widgetsStateVersion = widgetsState?.version
  const scrollRef = useRef<ScrollRefProps>({ hideArrow: true, disablePrevious: true, disableNext: false, scroll: () => { } })
  const { hideArrow, disablePrevious, disableNext, scroll } = scrollRef.current
  //DOM node used to locate the floating panel in the controller(Only for `onlyOpenOne`)
  const [reference, setReference] = useState(null)
  //Get all open state widgets in controller
  const widgets = useControlledWidgets(id, BASE_LAYOUT_NAME)
  const openingWidgets = Object.keys(widgets).filter((widgetId) => widgets[widgetId].state === WidgetState.Opened)
  const firstOpeningWidget = openingWidgets?.[0]
  const firstOpeningSize = size?.[firstOpeningWidget]

  useEffect(() => {
    getAppStore().dispatch(appActions.closeWidgets(openingWidgets))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [version])

  //Synchronize the state and method of scroll-list component to toolbar
  useEffect(() => {
    getAppStore().dispatch(appActions.widgetStatePropChange(id, 'hideArrow', hideArrow))
    getAppStore().dispatch(appActions.widgetStatePropChange(id, 'disablePrevious', disablePrevious))
    getAppStore().dispatch(appActions.widgetStatePropChange(id, 'disableNext', disableNext))
    getAppStore().dispatch(appActions.widgetStatePropChange(id, 'onArrowClick', scroll))
  }, [hideArrow, disablePrevious, disableNext, scroll, widgetsStateVersion, id])

  const updateWidgetConfig = (config: IMConfig) => {
    getAppConfigAction().editWidgetConfig(id, config).exec()
  }

  const onWidgetSizeChanged = (widgetId: string, _size: Size) => {
    if (!widgetId) {
      return
    }
    let size = config?.behavior.size || Immutable({}) as IMSizeMap
    size = size.set(widgetId, _size)
    updateWidgetConfig(config.setIn(['behavior', 'size'], size))
  }

  const handleItemClick = (evt: React.MouseEvent<HTMLDivElement>) => {
    const reference = evt.currentTarget
    const widgetId = reference.dataset?.widgetid
    setReference(reference)
    getAppStore().dispatch(appActions.closeWidgets(openingWidgets))
    getAppStore().dispatch(appActions.openWidget(widgetId))
  }

  return <>
    {firstOpeningWidget && <DummyLayout
      reference={reference}
      version={version}
      widgetId={firstOpeningWidget}
      controllerId={id}
      size={firstOpeningSize}
      onClose={() => getAppStore().dispatch(appActions.closeWidgets(openingWidgets))}
      onSizeChange={onWidgetSizeChanged}
      placement={placement} />}
    <LayoutList
      scrollListRef={scrollRef}
      vertical={config?.behavior?.vertical}
      widgetId={id}
      onItemClick={handleItemClick}
      itemStyle={config.appearance.card as any}
      draggable={true}
      space={config?.appearance?.space} />
  </>
}
