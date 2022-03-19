/** @jsx jsx */
import { React, jsx, QueriableDataSource, DataRecord, Immutable, ImmutableObject, MessageManager, DataRecordsSelectionChangeMessage } from 'jimu-core'
import { hooks, Icon, Dropdown, DropdownMenu, DropdownItem, DropdownButton } from 'jimu-ui'
import { IMConfig, IMServiceList, SearchServiceType } from '../../config'
import defaultMessage from '../translations/default'
import { getDatasourceConfigItemByConfigId, getJsonLength, getDatasource, loadAllDsRecord, getResultPopperOffset } from '../utils/utils'
import { AddressSchema } from '../utils/locator-service'
import { useTheme } from 'jimu-theme'
import { DownOutlined } from 'jimu-icons/outlined/directional/down'
import { UpOutlined } from 'jimu-icons/outlined/directional/up'
import { getStyle } from '../style/popper-style'
const { useEffect, useRef } = React
interface DisplayRecord {
  value: string[]
  configId: string
  outputDsId: string
  recordId: string
}

interface DisplayRecordData {
  [configId: string]: DisplayRecord[]
}

interface DisplayRecords {
  [configId: string]: DataRecord[]
}

interface SelectRecordsOption {
  isActive: boolean
  key: string
  recordId: string
  dsId: string
  configId: string
}

type IMDisplayRecordData = ImmutableObject<DisplayRecordData>

interface ResultListProps {
  serviceList: IMServiceList
  searchText: string
  reference: any
  id: string
  isOpentResultListDefault: boolean
  config: IMConfig
  className?: string
  setResultFirstItem: (ref) => void
}

const ResultList = (props: ResultListProps) => {
  const nls = hooks.useTranslate(defaultMessage)
  const { reference, searchText, id, config, serviceList, isOpentResultListDefault, setResultFirstItem } = props
  const { resultMaxNumber } = config
  const selectedRecordKey = useRef([] as string[])
  const isDataLoaded = useRef(false)
  const dropdownMenuRef = useRef<HTMLDivElement>(null)
  const isHasSetFirstItem = useRef<boolean>(false)

  let firstRecord: DisplayRecord = {} as DisplayRecord
  const theme = useTheme()

  const [displayRecord, setDisplayRecord] = React.useState(Immutable({}) as IMDisplayRecordData)
  const [displayRecords, setDisplayRecords] = React.useState({} as DisplayRecords)

  const [activeButtonKey, setActiveButtonKey] = React.useState(null)
  const [isShowResultList, setIsShowResultList] = React.useState(isOpentResultListDefault)
  const [isHasAutoSelectFirstRecord, setDsHasAutoSelectFirstRecord] = React.useState(false)

  useEffect(() => {
    loadRecords()
    // eslint-disable-next-line
  }, [serviceList])

  useEffect(() => {
    selectedRecordKey.current = []
  }, [searchText])

  /**
   * Load records by outputDatasource
  */
  const loadRecords = () => {
    isDataLoaded.current = false
    const serviceRecords = loadAllDsRecord(serviceList?.asMutable({ deep: true }), resultMaxNumber, id)
    Promise.all([serviceRecords]).then(res => {
      isDataLoaded.current = true
      let newDisplayRecord = displayRecord || Immutable({}) as IMDisplayRecordData
      let allResponse = []
      res?.forEach(resItem => {
        allResponse = allResponse.concat(resItem)
      })
      const newDisplayRecords: any = {}
      allResponse.forEach(dsResult => {
        const { records, configId, dsId, isGeocodeRecords } = dsResult
        newDisplayRecords[configId] = records
        const disPlayData = getDisplayRecords(records, configId, dsId, isGeocodeRecords)
        newDisplayRecord = newDisplayRecord.setIn([configId], disPlayData)
      })
      setDisplayRecords(newDisplayRecords)
      setDisplayRecord(newDisplayRecord)
      autoSelectFirstRecord()
      onSelectedRecordChange()
    })
  }

  /**
   * Render result list
  */
  const renderResultList = () => {
    const recordElementdata = []
    isHasSetFirstItem.current = null
    for (const configId in displayRecord) {
      const displayItem = displayRecord?.asMutable({ deep: true })?.[configId]
      const datasourceConfigItem = getDatasourceConfigItemByConfigId(config, configId)
      const label = datasourceConfigItem?.label
      const icon = datasourceConfigItem?.icon
      const currentOutputNumber = getJsonLength(serviceList)
      const list = (
        <div key={`${configId}_${label}_con`}>
          {displayItem.length > 0 && <div>
            {currentOutputNumber > 1 &&
              <DropdownItem disabled={true} key={`${configId}_${label}`} title={label}>
                {icon && <Icon className='mr-2' color={theme?.colors?.primary} size={16} icon={icon?.svg}/> }
                {label}
              </DropdownItem>
            }
            {renderResultItem(displayItem)}
          </div>}
        </div>
      )
      recordElementdata.push(list)
    }
    return recordElementdata
  }

  /**
   * Render result item
  */
  const renderResultItem = (displayData: DisplayRecord[]) => {
    return displayData?.map((displayDataItem, index) => {
      const { configId, value, recordId, outputDsId } = displayDataItem
      const key = getItemKey(configId, recordId)
      const isSelected = activeButtonKey === key
      const datasourceConfigItem = getDatasourceConfigItemByConfigId(config, configId)
      const icon = datasourceConfigItem?.icon
      const iconColor = isSelected ? theme?.colors?.white : theme?.colors?.primary
      const currentOutputNumber = getJsonLength(serviceList)

      return (
        <DropdownItem
          className='d-flex align-items-center'
          key={key}
          active={isSelected}
          title={value.join(', ')}
          ref={ref => { setFirstItemRef(index, ref) }}
          onClick={() => {
            onSelectRecord({
              isActive: isSelected,
              key: key,
              recordId: recordId,
              dsId: outputDsId,
              configId: configId
            })
          }}
        >
          {(icon && currentOutputNumber === 1) && <Icon className='mr-2' color={iconColor} size={16} icon={icon?.svg}/> }
          <div>{value.join(', ')}</div>
        </DropdownItem>
      )
    })
  }

  const setFirstItemRef = (index: number, ref) => {
    if (index === 0 && !isHasSetFirstItem.current) {
      setResultFirstItem(ref)
      isHasSetFirstItem.current = true
    }
  }

  /**
   * Select record after ds selected records changed
  */
  const onSelectedRecordChange = () => {
    if (isNoResult()) return
    const newSelectedRecordsKey = []
    for (const configId in serviceList) {
      const serviceItem = serviceList[configId]
      const isGeocodeService = serviceItem?.searchServiceType === SearchServiceType.GeocodeService
      const dsId = isGeocodeService ? serviceItem?.outputDataSourceId : serviceItem?.useDataSource?.dataSourceId
      const key = getDsSelectRecordsKeyItemByDsId(dsId, configId)
      key && newSelectedRecordsKey.push(key)
    }
    const newSelectedRecordsKeyList = getNewSelectedRecordKey(newSelectedRecordsKey, selectedRecordKey?.current)
    selectedRecordKey.current = newSelectedRecordsKey
    if (newSelectedRecordsKeyList && newSelectedRecordsKeyList[0]) {
      setActiveButtonKey(newSelectedRecordsKeyList[0])
    } else {
      setActiveButtonKey(null)
    }
  }

  const getDsSelectRecordsKeyItemByDsId = (dsId: string, configId: string) => {
    const ds = getDatasource(dsId) as QueriableDataSource
    const selectRecords = ds.getSelectedRecords()
    const selectedRecordId = selectRecords?.[0]?.getId()
    if (!selectRecords || !selectedRecordId) {
      return null
    }
    const selectedRecordKey = getItemKey(configId, selectedRecordId)
    return selectedRecordKey
  }

  /**
   * Get key of new selected records by newSelectedKey andoldSelectedKey
  */
  const getNewSelectedRecordKey = (newSelectedKey: string[], oldSelectedKey: string[]): string[] => {
    if (newSelectedKey?.length > oldSelectedKey?.length) {
      return newSelectedKey.concat(oldSelectedKey).filter(key => !newSelectedKey.includes(key) || !oldSelectedKey.includes(key)) || []
    } else {
      return newSelectedKey || []
    }
  }

  const onSelectRecord = (option: SelectRecordsOption) => {
    const { isActive, recordId, dsId, configId } = option
    const ds = getDatasource(dsId) as QueriableDataSource

    //Publish message action
    const records = !isActive ? getRecordsByRecordsId(configId, recordId) : []
    MessageManager.getInstance().publishMessage(
      new DataRecordsSelectionChangeMessage(id, records)
    )
    if (recordId) {
      !isActive ? ds.selectRecordsByIds([recordId]) : ds.selectRecordsByIds([])
      !isActive && clearOtherDsSlectedRecords(configId)
    }
  }

  const clearOtherDsSlectedRecords = (currentSelectConfigId: string) => {
    for (const configId in displayRecord) {
      if (currentSelectConfigId === configId) {
        continue
      } else {
        const dsId = displayRecord[configId]?.[0]?.outputDsId
        const ds = getDatasource(dsId) as QueriableDataSource
        ds && ds.selectRecordsByIds([])
      }
    }
  }

  const getRecordsByRecordsId = (configId: string, recordId: string): DataRecord[] => {
    const records = displayRecords?.[configId] || []
    const fieldRecord = records?.filter(record => record?.getId() === recordId)
    return fieldRecord || []
  }

  /**
   * Get display record list by field name
  */
  const getDisplayRecords = (records: DataRecord[], configId: string, dsId: string, isGeocodeRecords: boolean): DisplayRecord[] => {
    const layerDisplayFields = serviceList?.[configId]?.displayFields || []
    const displayFields = isGeocodeRecords ? [AddressSchema] : layerDisplayFields
    const displayRecordItem: DisplayRecord[] = []
    records?.forEach(record => {
      const valueData = []
      displayFields.forEach(field => {
        const fieldValue = record.getFieldValue(field.jimuName)
        fieldValue && valueData.push(fieldValue)
      })
      const displayRecord: DisplayRecord = {
        value: valueData,
        configId: configId,
        outputDsId: dsId,
        recordId: record?.getId()
      }
      displayRecordItem.push(displayRecord)
      initFirstRecord(displayRecord)
    })
    return displayRecordItem
  }

  const initFirstRecord = (displayItem: DisplayRecord) => {
    if (!firstRecord?.recordId && displayItem.recordId) {
      firstRecord = displayItem
    }
  }

  /**
   * Get key of record item element
  */
  const getItemKey = (configId: string, recordId: string) => {
    return `${configId}_${recordId}`
  }

  /**
   * Auto select first result
  */
  const autoSelectFirstRecord = () => {
    if (!config?.isAutoSelectFirstResult || !firstRecord?.recordId || isHasAutoSelectFirstRecord) return
    const { configId, recordId, outputDsId } = firstRecord
    const firstRecordKey = getItemKey(configId, recordId)
    onSelectRecord({
      isActive: false,
      key: firstRecordKey,
      recordId: recordId,
      dsId: outputDsId,
      configId: configId
    })
    setDsHasAutoSelectFirstRecord(true)
  }

  const onShowResultButtonclick = () => {
    setIsShowResultList(!isShowResultList)
  }

  const isNoResult = () => {
    let recordLength = 0
    for (const configId in displayRecord) {
      const length = displayRecord?.[configId]?.length || 0
      recordLength += length
    }
    return recordLength === 0 && isDataLoaded.current
  }

  const toggleResultListPopper = (e) => {
    const target = e?.target
    if (dropdownMenuRef?.current?.contains(target)) {
      return false
    }
    if (!isNoResult()) {
      setIsShowResultList(false)
    }
  }

  return (
    <div>
      <Dropdown className='w-100' size='lg' isOpen={true} toggle={toggleResultListPopper} aria-expanded={true}>
        <DropdownButton className='sr-only search-dropdown-button' style={{ height: 0, padding: 0 }}></DropdownButton>
        <DropdownMenu className='result-list-con' offset={getResultPopperOffset(getJsonLength(config.datasourceConfig) > 1)} trapFocus={false} autoFocus={false} css={getStyle(theme, reference)} style={{ maxHeight: 'auto' }}>
            <div ref={dropdownMenuRef}>
              {!isNoResult() && <DropdownItem className='d-flex align-items-center show-result-button' onClick={onShowResultButtonclick} title={nls('searchResults')}>
                <div className='flex-grow-1 font-weight-bold'>{nls('searchResults')}</div>
                {(!isShowResultList && !!searchText) ? <DownOutlined/> : <UpOutlined/>}
              </DropdownItem>}
              {isShowResultList && <div>
                {!isNoResult() && <DropdownItem divider={true} />}
                {isNoResult() && <DropdownItem className='text-center' disabled={true} title={nls('noResult', { searchText: searchText })}>{nls('noResult', { searchText: searchText })}</DropdownItem>}
                {!isNoResult() && renderResultList()}
              </div>}
            </div>
        </DropdownMenu>
      </Dropdown>
    </div>
  )
}
export default ResultList
