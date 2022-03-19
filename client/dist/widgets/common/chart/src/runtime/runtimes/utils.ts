import { React, DataSource, DataRecord, ReactRedux, IMState } from 'jimu-core'
import { MaxPieces, MaxSlices } from '../../constants'
import { getChartType } from '../../utils/default'

/**
 * Monitor and get the latest source records
 * @param dataSource
 */
export const useSourceRecords = (dataSource: DataSource): DataRecord[] => {
  const dataSourceId = dataSource?.id
  const sourceVersion = ReactRedux.useSelector((state: IMState) => state.dataSourcesInfo?.[dataSourceId]?.sourceVersion)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const records = React.useMemo(() => dataSource?.getSourceRecords() ?? [] as DataRecord[], [dataSource, sourceVersion])
  return records
}

/**
 * Get the limited records count.
 * @param series
 */
export const getRecordslimited = (series) => {
  const seriesLength = series?.length
  if (!seriesLength) return MaxPieces
  const type = getChartType(series)
  if (type === 'serial') {
    return MaxPieces / seriesLength
  } else if (type === 'pie') {
    return MaxSlices
  }
}
