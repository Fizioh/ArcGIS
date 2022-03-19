import { ImmutableObject, ImmutableArray, SqlExpression, UseDataSource, IconResult, OrderByOption } from 'jimu-core'
import { Size } from 'jimu-ui'

export enum CreateToolType {
  Point = 'Point',
  Polyline = 'Polyline',
  Polygon = 'Polygon',
  Rectangle = 'Rectangle',
  Circle = 'Circle'
}

export enum SelectionType {
  NewSelection = 'NEW_SELECTION',
  AddToSelection = 'ADD_TO_CURRENT_SELECTION',
  RemoveFromSelection = 'REMOVE_FROM_CURRENT_SELECTION',
  SubsetSelection = 'SUBSET_FROM_CURRENT_SELECTION',
  SwitchSelction = 'SWITCH_CURRENT_SELECTION',
}

export interface Field {
  name: string
  alias?: string
  label?: string
}

export enum QueryArrangeType {
  Block = 'BLOCK',
  Inline = 'INLINE',
  Popper = 'POPPER',
}

export enum SpatialFilterType {
  CurrentMapExtent = 'CurrentMapExtent',
  InteractiveDrawMode = 'InteractiveDrawMode',
  None = ''
}

export enum SpatialRelation {
  Intersect = 'intersects',
  Contain = 'contains',
  Cross = 'crosses',
  EnvelopeIntersect = 'envelope-intersects',
  IndexIntersect = 'index-intersects',
  Overlap = 'overlaps',
  Touch = 'touches',
  Within = 'within',
}

export interface SpatialFilterObj {
  geometry: any
  graphic?: __esri.Graphic
  layer?: __esri.GraphicsLayer
  clearAfterApply?: boolean
  relation?: SpatialRelation
  buffer?: { distance: number, unit: UnitType }
}

export const getSpatialRelationInfoMap = () => ({ // "intersects" | "contains" | "crosses" | "disjoint" | "envelope-intersects" | "index-intersects" | "overlaps" | "touches" | "within" | "relation"
  [SpatialRelation.Intersect]: 'intersects',
  [SpatialRelation.Contain]: 'contains',
  [SpatialRelation.Cross]: 'crosses',
  [SpatialRelation.EnvelopeIntersect]: 'envelope-intersects',
  [SpatialRelation.IndexIntersect]: 'index-intersects',
  [SpatialRelation.Overlap]: 'overlaps',
  [SpatialRelation.Touch]: 'touches',
  [SpatialRelation.Within]: 'within'
})

export enum UnitType {
  Miles = 'Miles',
  Kilometers = 'Kilometers',
  Feet = 'Feet',
  Meters = 'Meters',
  Yards = 'Yards',
  NauticalMiles = 'NauticalMiles',
}

export const getUnitInfoMap = () => ({ // "feet" | "kilometers" | "meters" | "miles" | "nautical-miles" | "yards"
  [UnitType.Miles]: 'miles',
  [UnitType.Kilometers]: 'kilometers',
  [UnitType.Feet]: 'feet',
  [UnitType.Meters]: 'meters',
  [UnitType.Yards]: 'yards',
  [UnitType.NauticalMiles]: 'nauticalMiles'
})

export enum ListDirection {
  Horizontal = 'Horizontal',
  Vertical = 'Vertical',
}

export enum PagingType {
  MultiPage = 'MultiPage',
  LazyLoad = 'LazyLoad',
}

export enum FieldsType {
  PopupSetting = 'PopupSetting',
  SelectAttributes = 'SelectAttributes',
}

export enum SortDirection {
  Asc = 'Asc',
  Desc = 'Desc',
}

export interface SortOption {
  name: string
  direction: SortDirection
}

export enum SymbolType {
  DefaultSymbol = 'DefaultSymbol',
  CustomSymbol = 'CustomSymbol',
}

// eslint-disable-next-line  @typescript-eslint/naming-convention
export interface QueryItemType {
  configId: string
  icon?: IconResult
  name?: string
  displayLabel?: boolean
  useDataSource?: UseDataSource
  outputDataSourceId?: string
  useAttributeFilter?: boolean
  useSpatialFilter?: boolean
  attributeFilterLabel?: string
  spatialFilterLabel?: string
  attributeFilterDesc?: string
  spatialFilterDesc?: string
  resultsLabel?: string
  sqlExprObj?: SqlExpression
  spatialMapWidgetIds?: string[]
  spatialFilterTypes?: SpatialFilterType[]
  spatialInteractiveCreateToolTypes?: CreateToolType[]
  spatialInteractiveEnableBuffer?: boolean
  spatialInteractiveBufferDistance?: number
  spatialInteractiveBufferUnit?: UnitType
  spatialRelations?: SpatialRelation[]
  spatialRelationUseDataSources?: UseDataSource[]
  spatialRelationEnableSelectTool?: boolean
  spatialRelationEnableBuffer?: boolean
  spatialRelationBufferDistance?: number
  spatialRelationBufferUnit?: UnitType
  resultListDirection?: ListDirection
  resultPagingStyle?: PagingType
  resultFieldsType?: FieldsType
  resultTitleFields?: string[]
  resultTitleExpression?: string
  resultDisplayFields?: string[]
  resultSymbolType?: SymbolType
  resultCustomSymbol?: any
  resultAllowChangeSymbol?: boolean
  allowExport?: boolean
  sortOptions?: OrderByOption[]
  itemSizeMap?: {
    arrangementHorizontalPopper?: SizeMap
  }
}

export interface SizeMap {
  minSize?: Size
  defaultSize?: Size
}

export interface SettingConfig {
  queryItems?: ImmutableArray<QueryItemType>
  arrangeType: QueryArrangeType
  arrangeWrap?: boolean
  resultListDirection?: ListDirection
  resultPagingStyle?: PagingType
  sizeMap?: {
    arrangementIconPopper?: SizeMap
  }
}

export type IMConfig = ImmutableObject<SettingConfig>
