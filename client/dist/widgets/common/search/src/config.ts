import { UseDataSource, SqlResult, FieldSchema } from 'jimu-core'
import { IMLinkParam } from 'jimu-ui/advanced/setting-components'
import { ImmutableObject } from 'seamless-immutable'
export const RECENT_SEARCHES_KEY = 'recent_searches'
export const MAX_RESULT = 6
export const MAX_SUGGESTION = 6
export const MAX_RECENT_SEARCHES = 6
export interface InitResultServiceListOption {
  configId?: string
  magicKey?: string
  isFromSuggestion?: boolean
}

export enum SearchServiceType {
  GeocodeService = 'GeocodeService',
  FeatureService = 'FeatureService'
}
export enum SearchResultView {
  ResultPanel = 'Result_Panel',
  OtherWidgets = 'Other_Widgets'
}

export enum ArrangementStyle {
  Style1 = 'Style1',
  Style2 = 'Style2'
}

export enum EntityStatusType {
  None = '',
  Init = 'init',
  Loading = 'loading',
  Loaded = 'loaded',
  Warning = 'warning',
  Error = 'error',
}

export interface SearchFieldData {
  [key: string]: {
    searchFields: FieldSchema[]
    displayFields: FieldSchema[]
  }
}

export interface NewLayerConfigItemSetting extends LayersConfig {
  enable: boolean
}

export interface NewGeocodeItemSetting extends GeocodeConfig {
  enable: boolean
}

export interface NewDatasourceConfigItem extends DatasourceConfigItem {
  enable: boolean
}

export type IMNewLayerConfigItemSetting = ImmutableObject<NewLayerConfigItemSetting>

export type IMNewGeocodeItemSetting = ImmutableObject<NewGeocodeItemSetting>

export type IMNewDatasourceConfigItem = ImmutableObject<NewDatasourceConfigItem>

export type IMSearchFieldData = ImmutableObject<SearchFieldData>

export interface SuggestionItem {
  suggestionHtml: string | Element
  suggestion: string
  isRecentSearche?: boolean
  configId?: string
  isFromSuggestion?: boolean
  magicKey?: string
}

export interface Suggestion {
  suggestionItem: SuggestionItem[]
  layer: string
  icon?: any
}

export type IMSuggestion = ImmutableObject<Suggestion>

export interface DatasourceList {
  [key: string]: DatasourceListItem
}

export interface GeocodeList {
  [key: string]: GeocodeListItem
}

export type ServiceList = DatasourceList & GeocodeList

export interface DatasourceListItem {
  searchServiceType: SearchServiceType
  maxSuggestions: number
  resultMaxNumber: number
  useDataSource: UseDataSource
  displayFields?: FieldSchema[]
  searchFields?: FieldSchema[]
  SQL?: SqlResult
  searchExact?: boolean
  hint?: string
  isFromSuggestion?: boolean
  configId: string
}

export interface GeocodeListItem {
  searchServiceType: SearchServiceType
  maxSuggestions: number
  resultMaxNumber: number
  label: string
  geocodeURL: string
  outputDataSourceId: string
  hint?: string
  icon?: any
  magicKey?: string
  configId: string
  singleLineFieldName?: string
}

export type IMDatasourceList = ImmutableObject<DatasourceList>
export type IMGeocodeList = ImmutableObject<GeocodeList>
export type IMServiceList = ImmutableObject<ServiceList>
export interface LayersConfig {
  configId: string
  label: string
  useDataSource: UseDataSource
  icon?: any
  searchFields?: FieldSchema[]
  searchExact?: boolean
  displayFields?: FieldSchema[]
  hint?: string
  searchServiceType?: SearchServiceType
}

export interface GeocodeConfig {
  configId: string
  label: string
  geocodeURL: string
  outputDataSourceId: string
  useDataSource: UseDataSource
  icon?: any
  hint?: string
  searchServiceType?: SearchServiceType
  singleLineFieldName?: string
}

export type IMGeocodeConfig = ImmutableObject<GeocodeConfig>

export type DatasourceConfigItem = LayersConfig & GeocodeConfig

export type IMDatasourceConfigItem = ImmutableObject<DatasourceConfigItem>
export interface config {
  datasourceConfig: DatasourceConfigItem[]
  searchResultView: SearchResultView
  arrangementStyle: ArrangementStyle
  hint: string
  maxSuggestions: number
  isUseCurrentLoation: boolean
  isShowRecentSearches: boolean
  recentSearchesMaxNumber: number
  resultMaxNumber: number
  isAutoSelectFirstResult: boolean
  // link
  linkParam?: IMLinkParam
}

export type IMConfig = ImmutableObject<config>
