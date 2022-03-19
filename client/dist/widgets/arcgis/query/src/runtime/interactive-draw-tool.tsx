/** @jsx jsx */
import { React, jsx, ImmutableArray, moduleLoader } from 'jimu-core'
import { hooks, Checkbox } from 'jimu-ui'
import { JimuMapView } from 'jimu-arcgis'
import { CreateToolType } from '../config'
import { EntityStatusType, StatusIndicator } from '../common/common-components'
import defaultMessage from './translations/default'
export interface InteractiveDrawProps {
  jimuMapView: JimuMapView
  toolTypes: ImmutableArray<CreateToolType>
  onDrawEnd: (graphic: __esri.Graphic, layer?, clearAfterApply?: boolean) => void
}

const sketchToolInfoMap = {
  [CreateToolType.Point]: { drawToolName: 'point', esriClassName: 'esri-icon-point', toolIndex: 0 },
  [CreateToolType.Polyline]: { drawToolName: 'polyline', esriClassName: 'esri-icon-polyline', toolIndex: 4 },
  [CreateToolType.Polygon]: { drawToolName: 'polygon', esriClassName: 'esri-icon-polygon', toolIndex: 2 },
  [CreateToolType.Rectangle]: {
    drawToolName: 'rectangle',
    esriClassName: 'esri-icon-checkbox-unchecked',
    toolIndex: 1
  },
  [CreateToolType.Circle]: { drawToolName: 'circle', esriClassName: 'esri-icon-radio-unchecked', toolIndex: 3 }
}

export function InteractiveDraw (props: InteractiveDrawProps) {
  const { toolTypes = [], jimuMapView, onDrawEnd } = props
  const getI18nMessage = hooks.useTranslate(defaultMessage)
  const [mapModule, setMapModule] = React.useState(null)
  const layerRef = React.useRef(null)
  const graphicRef = React.useRef(null)
  const [clearAfterApply, setClearAfterApply] = React.useState(false)

  const visibleElements = React.useMemo(() => {
    return {
      createTools: Object.entries(sketchToolInfoMap).reduce(
        (result, [key, value]) => ({ ...result, [value.drawToolName]: toolTypes.includes(key as CreateToolType) }),
        { point: false }
      ),
      selectionTools: {
        'lasso-selection': false,
        'rectangle-selection': false
      },
      settingsMenu: false,
      undoRedoMenu: false
    }
  }, [toolTypes])

  hooks.useEffectOnce(() => {
    moduleLoader.loadModule('jimu-ui/advanced/map').then((result) => {
      setMapModule(result)
    })
  })

  const handleDrawToolCreated = React.useCallback(({ sketch }) => {
    layerRef.current = sketch.layer
  }, [])

  const handleDrawStart = React.useCallback(() => {
    layerRef.current?.removeAll()
  }, [])

  const handleDrawEnd = React.useCallback(
    (graphic) => {
      graphicRef.current = graphic
      onDrawEnd(graphic, layerRef.current, clearAfterApply)
    },
    [onDrawEnd, clearAfterApply]
  )

  const handleCleared = React.useCallback(() => {
    graphicRef.current = null
    onDrawEnd(null)
  }, [onDrawEnd])

  const handleClearSettingChange = React.useCallback((e) => {
    if (graphicRef.current) {
      onDrawEnd(graphicRef.current, layerRef.current, e.target.checked)
    }
    setClearAfterApply(e.target.checked)
  }, [onDrawEnd])

  const Draw = mapModule?.Draw
  if (!Draw) {
    return <StatusIndicator statusType={EntityStatusType.Loading} />
  }
  const isAvailbel = Object.keys(visibleElements.createTools).some(toolName => visibleElements.createTools[toolName])
  if (!isAvailbel) {
    return null
  }
  return (
    <div>
      <Draw
        jimuMapView={jimuMapView}
        disableSymbolSelector
        updateOnGraphicClick={false}
        creationMode='single'
        visibleElements={visibleElements}
        onDrawToolCreated={handleDrawToolCreated}
        onDrawStart={handleDrawStart}
        onDrawEnd={handleDrawEnd}
        onDrawToolCleared={handleCleared}
      />
      <label className='d-flex align-items-center'>
        <Checkbox checked={clearAfterApply} onChange={handleClearSettingChange} className='mr-2' />
        {getI18nMessage('clearDrawing')}
      </label>
    </div>
  )
}
