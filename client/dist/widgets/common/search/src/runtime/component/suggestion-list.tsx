/** @jsx jsx */
import { React, jsx, esri, classNames } from 'jimu-core'
import { hooks, Icon, DropdownItem, Dropdown, DropdownMenu, DropdownButton, defaultMessages as jimuiDefaultMessage } from 'jimu-ui'
import { Suggestion, IMServiceList, InitResultServiceListOption, IMConfig } from '../../config'
import defaultMessage from '../translations/default'
import { TrashOutlined } from 'jimu-icons/outlined/editor/trash'
import CurrentLocation from './use-current-location'
import { useTheme } from 'jimu-theme'
import { getStyle } from '../style/popper-style'
import { getResultPopperOffset } from '../utils/utils'
const { useRef } = React
interface SearchSettingProps {
  searchText: string
  isOpen: boolean
  isRecentSearches: boolean
  reference: any
  searchSuggestion: Suggestion[]
  className?: string
  canUseOutoutDsLength: number
  serviceList: IMServiceList
  isShowCurrentLocation: boolean
  config: IMConfig
  toggel?: () => void
  onRecordItemClick: (searchText: string, initResultServiceListOption?: InitResultServiceListOption) => void
  clearSearches: () => void
  setSuggestionFirstItem: (ref) => void
}
const Sanitizer = esri.Sanitizer
const sanitizer = new Sanitizer()

const SuggestionList = (props: SearchSettingProps) => {
  const nls = hooks.useTranslate(defaultMessage, jimuiDefaultMessage)
  const { isRecentSearches, className, reference, searchSuggestion, isOpen, searchText, canUseOutoutDsLength, serviceList, isShowCurrentLocation, config, toggel, onRecordItemClick, clearSearches, setSuggestionFirstItem } = props
  const theme = useTheme()
  const isHasSetFirstItem = useRef<boolean>(false)

  const checkIsNoResult = () => {
    let totalSuggestionItem = []
    searchSuggestion.forEach(layerSuggestion => {
      const suggestionItem = layerSuggestion?.suggestionItem || []
      totalSuggestionItem = totalSuggestionItem.concat(suggestionItem)
    })
    return searchText && totalSuggestionItem.length === 0
  }

  const handelSuggestionItemClick = (searchText: string, initResultServiceListOption?: InitResultServiceListOption) => {
    const { configId, isFromSuggestion, magicKey } = initResultServiceListOption || {}
    if (configId && (isFromSuggestion || magicKey)) {
      onRecordItemClick(searchText, initResultServiceListOption)
    } else {
      onRecordItemClick(searchText)
    }
  }

  const renderLayerSuggestionElement = () => {
    isHasSetFirstItem.current = null
    return searchSuggestion?.map((layerSuggestion, index) => {
      const isShowLayerName = searchSuggestion?.length > 1 && layerSuggestion?.suggestionItem?.length > 0
      return (
        <div key={`${layerSuggestion?.layer}-${index}`}>
          {isShowLayerName && <DropdownItem disabled={true} title={layerSuggestion?.layer}>
            {layerSuggestion?.icon && <Icon className='mr-2' color={theme?.colors?.primary} size={16} icon={layerSuggestion?.icon?.svg}/> }
            {layerSuggestion?.layer}
          </DropdownItem>}
          {renderSuggestionItemElement(layerSuggestion)}
        </div>
      )
    })
  }

  const renderSuggestionItemElement = (suggestion: Suggestion) => {
    const suggestionItem = suggestion?.suggestionItem
    const icon = suggestion?.icon
    return suggestionItem?.map((item, index) => {
      const suggestionHtml = sanitizer.sanitize(
        item.suggestionHtml
      )
      const initResultServiceListOption = {
        configId: item?.configId,
        isFromSuggestion: item?.isFromSuggestion,
        magicKey: item?.magicKey
      }
      return (
        <DropdownItem
          className='d-flex align-items-center'
          key={`${suggestion?.layer}${index}`}
          title={item.suggestion}
          onClick={() => {
            handelSuggestionItemClick(item.suggestion, initResultServiceListOption)
          }}
          ref={ref => { setFirstItemRef(index, ref) }}
        >
          {(icon && canUseOutoutDsLength === 1) && <Icon className='mr-2' color={theme?.colors?.primary} size={16} icon={icon?.svg}/> }
          <div className='flex-grow-1' dangerouslySetInnerHTML={{ __html: suggestionHtml }}></div>
        </DropdownItem>
      )
    })
  }

  const setFirstItemRef = (index: number, ref) => {
    if (index === 0 && !isHasSetFirstItem.current) {
      setSuggestionFirstItem(ref)
      isHasSetFirstItem.current = true
    }
  }

  const DatasourceConfig = config?.datasourceConfig || []

  return (
    <div>
      <Dropdown className='w-100' size='lg' isOpen={isOpen} toggle={toggel}>
        <DropdownButton className='sr-only search-dropdown-button' style={{ height: 0, padding: 0 }}></DropdownButton>
        <DropdownMenu className={classNames('result-list-con', className)} offset={getResultPopperOffset(DatasourceConfig.length > 1)} trapFocus={false} autoFocus={false} css={getStyle(theme, reference)} style={{ maxHeight: 'auto' }}>
          {(!searchText && isShowCurrentLocation) && <CurrentLocation
            serviceList={serviceList}
            isShowCurrentLocation={true}
            onLocationChange={onRecordItemClick}
          />}
          {checkIsNoResult() && <DropdownItem className='text-center' disabled={true} title={nls('noResult', { searchText: searchText })}>{nls('noResult', { searchText: searchText })}</DropdownItem>}
          {renderLayerSuggestionElement()}
          {isRecentSearches && <DropdownItem divider={true} />}
          {isRecentSearches && <DropdownItem title={nls('clearRecentSearches')} type='secondary' onClick={clearSearches}>
            <TrashOutlined/>
            {nls('clearRecentSearches')}
          </DropdownItem>}
        </DropdownMenu>
      </Dropdown>
    </div>
  )
}

export default SuggestionList
