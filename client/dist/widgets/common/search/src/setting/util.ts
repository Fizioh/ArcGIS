import { SceneLayerDataSource, FeatureLayerDataSource, DataSourceTypes, UseDataSource, IMWidgetJson, JimuFieldType, ImmutableArray, DataSourceSchema, DataSourceJson } from 'jimu-core'
import { OutputDsObjectField, OutputDsAddress } from '../constants'
import { DatasourceConfigItem, GeocodeConfig, SearchServiceType } from '../config'
import { getDefaultGeocodeLabel } from '../utils/geocode-utils'
export const ObjectIdSchema = {
  jimuName: OutputDsObjectField,
  alias: 'OBJECTID',
  type: JimuFieldType.Number,
  name: OutputDsObjectField
}

export const AddressSchema = {
  jimuName: OutputDsAddress,
  alias: 'ADDRESS',
  type: JimuFieldType.String,
  name: OutputDsAddress
}

export interface GetDefaultGeocodeConfigOption {
  configId: string
  id: string
  hint: string
  label: string
  geocodeServiceUrl: string
  singleLineFieldName: string
}

/**
 * Get outputDs default schema
*/
export const getInitSchema = (label: string = '') => {
  return {
    label,
    idField: OutputDsObjectField,
    fields: {
      [OutputDsObjectField]: ObjectIdSchema,
      [OutputDsAddress]: AddressSchema
    }
  } as unknown as DataSourceSchema
}

/**
 * Get outputDs json
*/
export const getInitOutDataSource = (widgetId: string, configId: string, geocodeUrl: string, label?: string) => {
  const dsLabel = label || getDefaultGeocodeLabel(geocodeUrl)
  const dsId = getOutputDataSourceId(configId, widgetId)
  const schema = getInitSchema(label)

  const outputDsJson: DataSourceJson = {
    id: dsId,
    type: DataSourceTypes.FeatureLayer,
    label: dsLabel,
    originDataSources: [],
    isOutputFromWidget: true,
    isDataInDataSourceInstance: false,
    schema,
    geometryType: 'esriGeometryPoint'
  }

  return outputDsJson
}

/**
 * Get geocode service default config
*/
export const getDefaultGeocodeConfig = (option: GetDefaultGeocodeConfigOption): GeocodeConfig => {
  return {
    configId: option.configId,
    label: option?.label || getDefaultGeocodeLabel(option.geocodeServiceUrl),
    geocodeURL: option.geocodeServiceUrl,
    outputDataSourceId: getOutputDataSourceId(option.configId, option.id),
    useDataSource: null,
    hint: option?.hint,
    searchServiceType: SearchServiceType.GeocodeService,
    singleLineFieldName: option?.singleLineFieldName
  }
}

export const getOutputJsonOriginDs = (ds: SceneLayerDataSource | FeatureLayerDataSource): FeatureLayerDataSource => {
  if (!ds) {
    return null
  }

  if (ds.type === DataSourceTypes.SceneLayer) {
    /**
     * If is scene layer data source, will use associated feature layer data source to generate output data source.
     */
    return (ds).getAssociatedDataSource()
  } else {
    return ds
  }
}

export const getWhetherDsInUseDataSources = (
  ds: UseDataSource,
  useDataSources: ImmutableArray<UseDataSource>
): boolean => {
  if (!ds || !useDataSources) {
    return false
  }
  return useDataSources.some(u => u.dataSourceId === ds.dataSourceId)
}

export const isDsInDatasources = (datasource: UseDataSource, datasources: UseDataSource[]): boolean => {
  return datasources.filter(ds => ds?.dataSourceId === datasource?.dataSourceId)?.length > 0
}

/**
 * Check is useDatasource or outputDatasource chenged in widgeJson
*/
export const checkIsWidgetJsonDsChanged = (widgetJson: IMWidgetJson, useDataSource: UseDataSource[], outputDatasource: string[]): boolean => {
  const widgetJsonUseDs = widgetJson?.useDataSources?.asMutable({ deep: true }) || []
  const widgetJsonoutputUseDs = widgetJson?.outputDataSources?.asMutable({ deep: true }) || []
  if (widgetJsonUseDs?.length !== useDataSource?.length || widgetJsonoutputUseDs?.length !== outputDatasource?.length) {
    return true
  }
  const isUseDsChenged = useDataSource?.filter(ds => !isDsInDatasources(ds, widgetJsonUseDs))?.length > 0
  const isOutputDsChanged = widgetJsonoutputUseDs.filter(ouputDs => !outputDatasource?.includes(ouputDs))?.length > 0
  return (isUseDsChenged || isOutputDsChanged)
}

/**
 * Get congfig id list
*/
export const getConfigIdList = (datasourceConfig: DatasourceConfigItem[]) => {
  return datasourceConfig?.map(item => item.configId)
}

/**
 * Get new datasource config id
*/
export const getNewConfigId = (configIdList: string[]): string => {
  if (!configIdList || configIdList?.length === 0) return 'config_0'
  const maxIndex = getConfigIndexMaxNumber(configIdList)
  return `config_${maxIndex + 1}`
}

const getConfigIndexMaxNumber = (configIdList: string[]) => {
  const idIndexData = configIdList?.map(id => {
    const currentIndex = id?.split('_')?.pop()
    return currentIndex ? Number(currentIndex) : 0
  })
  return idIndexData?.sort((a, b) => b - a)?.[0]
}

export const getOutputDataSourceId = (configId: string, widgetId: string) => {
  if (!configId) return `${widgetId}_output_0`
  const currentIndex = configId?.split('_')?.pop()
  return `${widgetId}_output_${Number(currentIndex)}`
}
