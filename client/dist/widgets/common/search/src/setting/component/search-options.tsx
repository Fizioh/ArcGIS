/** @jsx jsx */
import { React, css, jsx, UseDataSource, ImmutableArray, LinkType, Immutable, defaultMessages as jimuCoreDefaultMessage } from 'jimu-core'
import { SettingChangeFunction } from 'jimu-for-builder'
import { SettingSection, SettingRow, SettingCollapse, LinkSelector, IMLinkParam, OpenTypes } from 'jimu-ui/advanced/setting-components'
import { IMConfig, SearchResultView, MAX_RESULT, MAX_SUGGESTION, MAX_RECENT_SEARCHES } from '../../config'
import { hooks, TextInput, Checkbox, Switch, defaultMessages as jimuiDefaultMessage } from 'jimu-ui'
import defaultMessage from '../translations/default'
import { useTheme } from 'jimu-theme'
interface SearchOptionsProps {
  id: string
  onSettingChange: SettingChangeFunction
  config: IMConfig
  useDataSources: ImmutableArray<UseDataSource>
}

const SearchOptions = (props: SearchOptionsProps) => {
  const nls = hooks.useTranslate(defaultMessage, jimuiDefaultMessage, jimuCoreDefaultMessage)
  const appTheme = useTheme()

  const STYLE = css`
    .check-box-label {
      color: ${appTheme.colors.palette.dark[800]}
    }
    .search-setting-con {
      padding-left: 0;
      padding-right: 0;
    }
    .divider-line {
      padding-bottom: 0;
    }
    .checkbox-con .jimu-widget-setting--row-label{
      max-width: 100%;
    }
  `
  const { config, id, useDataSources, onSettingChange } = props
  const { searchResultView, hint, maxSuggestions, isUseCurrentLoation, isShowRecentSearches, recentSearchesMaxNumber, resultMaxNumber, linkParam, isAutoSelectFirstResult } = config

  const [openSearchSuggestion, setOpenSearchSuggestion] = React.useState(false)
  const [openSearchResult, setOpenSearchResult] = React.useState(false)
  const [newHint, setNewHint] = React.useState(hint)

  const [newRecentSearchesMaxNumber, setRecentSearchesMaxNumber] = React.useState(recentSearchesMaxNumber)
  const [newMaxSuggestions, setMaxSuggestions] = React.useState(maxSuggestions)
  const [newResultMaxNumber, setResultMaxNumber] = React.useState(resultMaxNumber)

  const onConfigChange = (key: string[], value: any) => {
    onSettingChange({ id: id, config: config.setIn(key, value) })
  }

  const handleCurrentLocationChange = (evt) => {
    const target = evt.currentTarget
    if (!target) return
    onConfigChange(['isUseCurrentLoation'], target.checked)
  }

  const handleAutoSelectChange = (evt) => {
    const target = evt.currentTarget
    if (!target) return
    onConfigChange(['isAutoSelectFirstResult'], target.checked)
  }

  const handleMaxSuggestionsChange = (e) => {
    const value = e.target.value
    checkNumber(value) && setMaxSuggestions(value)
  }

  const handleMaxSuggestionsAccept = value => {
    if (!value) {
      value = maxSuggestions || MAX_SUGGESTION
      setMaxSuggestions(value)
    }
    checkNumber(value) && onConfigChange(['maxSuggestions'], Number(value))
  }

  const handleRecentSearchesMaxNumberAccept = value => {
    if (!value) {
      value = recentSearchesMaxNumber || MAX_RECENT_SEARCHES
      setRecentSearchesMaxNumber(value)
    }
    checkNumber(value) && onConfigChange(['recentSearchesMaxNumber'], Number(value))
  }

  const handleRecentSearchesMaxNumberChange = (e) => {
    const value = e.target.value
    checkNumber(value) && setRecentSearchesMaxNumber(value)
  }

  const handleResultMaxNumberAccept = value => {
    if (!value) {
      value = resultMaxNumber || MAX_RESULT
      setResultMaxNumber(value)
    }
    checkNumber(value) && onConfigChange(['resultMaxNumber'], Number(value))
  }

  const handleResultMaxNumberChange = (e) => {
    const value = e.target.value
    checkNumber(value) && setResultMaxNumber(value)
  }

  const checkNumber = (value): boolean => {
    if (value?.length === 0) return true
    return Number(value) && Number(value) > 0
  }

  const onSettingLinkConfirm = (linkResult: IMLinkParam) => {
    if (!linkResult) {
      return
    }
    onConfigChange(['linkParam'], linkResult)
  }

  const onResultViewChange = (isShowSearchResultView: boolean) => {
    const resultView = isShowSearchResultView ? SearchResultView.ResultPanel : SearchResultView.OtherWidgets
    onConfigChange(['searchResultView'], resultView)
  }

  const getHiddenLinks = (): ImmutableArray<LinkType> => {
    return Immutable([LinkType.Block, LinkType.Dialog, LinkType.PageTop, LinkType.Screen, LinkType.View, LinkType.WebAddress])
  }

  const handleHintChange = (event) => {
    const value = event?.target?.value
    setNewHint(value)
  }

  const handHintAccept = value => {
    setNewHint(value)
    onConfigChange(['hint'], value)
  }

  const renderSearchSuggestionSetting = () => {
    return (
      <div>
        <SettingSection className='search-setting-con'>
          <SettingRow>
            <SettingCollapse
              label={nls('searchSuggestion')}
              isOpen={openSearchSuggestion}
              onRequestOpen={() => setOpenSearchSuggestion(true)}
              onRequestClose={() => setOpenSearchSuggestion(false)}
              level={1}
            >
              <SettingRow flow='wrap' className='mt-2 checkbox-con' label={nls('maximumSuggestions')}>
                <TextInput size='sm' value={newMaxSuggestions} onChange={handleMaxSuggestionsChange} onAcceptValue={handleMaxSuggestionsAccept} className='w-100'/>
              </SettingRow>
              <SettingRow>
                <Checkbox checked={isUseCurrentLoation} onClick={handleCurrentLocationChange} className='mr-1' aria-label={nls('useCurrentLocation')}/>
                <span className='check-box-label'>{nls('useCurrentLocation')}</span>
              </SettingRow>
              <SettingRow label={nls('recentSearches')}>
                <Switch checked={isShowRecentSearches || false} onChange={(evt: any) => { onConfigChange(['isShowRecentSearches'], !isShowRecentSearches) }} />
              </SettingRow>
              {isShowRecentSearches && <SettingRow label={nls('maximumNumber')}>
                <TextInput size='sm' value={newRecentSearchesMaxNumber} onChange={handleRecentSearchesMaxNumberChange} onAcceptValue={handleRecentSearchesMaxNumberAccept} style={{ width: '50px' }}/>
              </SettingRow>}
            </SettingCollapse>
          </SettingRow>
        </SettingSection>
        {openSearchSuggestion && <SettingSection className='divider-line'/>}
      </div>
    )
  }

  const renderSearchResultSetting = () => {
    return (
      <SettingRow>
        <SettingCollapse
          label={nls('searchResult')}
          isOpen={openSearchResult}
          onRequestOpen={() => setOpenSearchResult(true)}
          onRequestClose={() => setOpenSearchResult(false)}
          level={1}
        >
          <SettingRow label={nls('resultPanel')} className='mt-2'>
            <Switch checked={searchResultView === SearchResultView.ResultPanel} onChange={(evt: any) => { onResultViewChange(searchResultView === SearchResultView.OtherWidgets) }} />
          </SettingRow>

          {searchResultView === SearchResultView.ResultPanel && <SettingRow flow='wrap' className='checkbox-con' label={nls('maximumResults')}>
            <TextInput size='sm' value={newResultMaxNumber} onChange={handleResultMaxNumberChange} onAcceptValue={handleResultMaxNumberAccept} className='w-100' />
          </SettingRow>}

          {searchResultView === SearchResultView.ResultPanel && <SettingRow>
            <Checkbox checked={isAutoSelectFirstResult} onClick={handleAutoSelectChange} className='mr-1' aria-label={nls('autoSelect')}/>
            <span className='check-box-label'>{nls('autoSelect')}</span>
          </SettingRow>}

          {searchResultView === SearchResultView.OtherWidgets && <SettingRow className='d-block' flow='wrap' label={nls('redirectSearchResult')}>
            <LinkSelector
              onSettingConfirm={onSettingLinkConfirm}
              linkParam={linkParam}
              useDataSources={useDataSources}
              widgetId={id}
              hiddenLinks={getHiddenLinks()}
              openTypes={Immutable([OpenTypes.CurrentWindow])}
            />
          </SettingRow>}
        </SettingCollapse>
      </SettingRow>
    )
  }

  return (
    <SettingSection title={nls('generalSearchOption')} css={STYLE}>
      <SettingRow flow='wrap' label={nls('multySearchHint')}>
        <TextInput size='sm' value={newHint || ''} onChange={handleHintChange} onAcceptValue={handHintAccept} className='w-100' placeholder={nls('findAddressOrPlace')}/>
      </SettingRow>
      {renderSearchSuggestionSetting()}
      {renderSearchResultSetting()}
    </SettingSection>
  )
}

export default SearchOptions
