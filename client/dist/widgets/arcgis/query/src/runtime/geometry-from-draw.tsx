/** @jsx jsx */
import { React, jsx, css, ImmutableArray } from 'jimu-core'
import { JimuMapViewComponent, JimuMapView } from 'jimu-arcgis'
import { hooks } from 'jimu-ui'
import { CreateToolType, UnitType } from '../config'
import { InteractiveDraw } from './interactive-draw-tool'
import { BufferInput } from './buffer-input'
import defaultMessage from './translations/default'
import { QueryTaskContext } from './query-task-context'

export interface Props {
  mapWidgetIds: ImmutableArray<string>
  createToolTypes: ImmutableArray<CreateToolType>
  enableBuffer: boolean
  bufferDistance: number
  bufferUnit: UnitType
  onBufferChange: (distance: number, unit: UnitType) => void
  onGeometryChange: (geom: __esri.Geometry, layer?: __esri.GraphicsLayer, graphic?: __esri.Graphic, clearAfterApply?: boolean) => void
}

export function GeometryFromDraw (props: Props) {
  const { onGeometryChange, createToolTypes, mapWidgetIds, enableBuffer, bufferDistance, bufferUnit, onBufferChange } = props
  const [jimuMapView, setJimuMapView] = React.useState<JimuMapView>(null)
  const getI18nMessage = hooks.useTranslate(defaultMessage)
  const queryTaskContext = React.useContext(QueryTaskContext)
  const resetSymbolRef = React.useRef(queryTaskContext.resetSymbol)
  const layerRef = React.useRef<__esri.GraphicsLayer>(null)

  hooks.useEffectOnce(() => {
    if (enableBuffer) {
      onBufferChange(bufferDistance, bufferUnit)
    }
  })

  React.useEffect(() => {
    if (queryTaskContext.resetSymbol && queryTaskContext.resetSymbol !== resetSymbolRef.current) {
      resetSymbolRef.current = queryTaskContext.resetSymbol
      layerRef.current?.removeAll()
      onGeometryChange(null)
    }
  }, [queryTaskContext.resetSymbol, onGeometryChange])

  const handleJimuMapViewChanged = React.useCallback((jimuMapView: JimuMapView) => {
    setJimuMapView(jimuMapView?.view != null ? jimuMapView : null)
  }, [])

  const handleDrawEnd = React.useCallback((graphic, layer, clearAfterApply) => {
    layerRef.current = layer
    onGeometryChange(graphic?.geometry, layer, graphic, clearAfterApply)
  }, [onGeometryChange])

  return (
    <React.Fragment>
      {
        mapWidgetIds?.map((mapWidgetId, x) => (
          <JimuMapViewComponent
            key={x} useMapWidgetId={mapWidgetId} onActiveViewChange={handleJimuMapViewChanged}
          />
        ))
      }
      {jimuMapView?.view && (
        <React.Fragment>
          <InteractiveDraw
            jimuMapView={jimuMapView}
            toolTypes={createToolTypes}
            onDrawEnd={handleDrawEnd}
          />
          {enableBuffer && (
            <div role='group' aria-label={getI18nMessage('bufferDistance')} css={css`margin-top: 0.75rem;`}>
              <div className='text-truncate'>{getI18nMessage('bufferDistance')}</div>
              <div className='d-flex mt-1'>
                <BufferInput distance={bufferDistance} unit={bufferUnit} onBufferChange={onBufferChange}/>
              </div>
            </div>
          )}
        </React.Fragment>
      )}
    </React.Fragment>
  )
}
