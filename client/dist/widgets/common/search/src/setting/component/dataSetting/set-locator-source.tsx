/** @jsx jsx */
import { React, css, esri, jsx, polished, UseDataSource, ImmutableArray, Immutable, lodash, loadArcGISJSAPIModules, defaultMessages as jimuCoreDefaultMessage } from 'jimu-core'
import { SettingChangeFunction } from 'jimu-for-builder'
import { SettingSection, SettingRow, SidePopper } from 'jimu-ui/advanced/setting-components'
import { IconPicker } from 'jimu-ui/advanced/resource-selector'
import { hooks, TextArea, TextInput, defaultMessages as jimuiDefaultMessage } from 'jimu-ui'
import defaultMessage from '../../translations/default'
import { IMConfig, GeocodeConfig, IMGeocodeConfig, SearchServiceType } from '../../../config'
import { WarningOutlined } from 'jimu-icons/outlined/suggested/warning'
import { getConfigIdList, getNewConfigId } from '../../util'
import { DefaultGeocodeURL, DefaultGeocodeLabel } from '../../../constants'
import { getDefaultGeocodeLabel } from '../../../utils/geocode-utils'
import { useTheme } from 'jimu-theme'
const { useEffect, useRef } = React
const Sanitizer = esri.Sanitizer
const sanitizer = new Sanitizer()

enum UrlCheckResultType {
  Pass = 'Pass',
  NotHttps = 'Not_Https',
  InvalidURL = 'Invalid_URL'
}

interface UrlCheckResult {
  urlCheckResultType: UrlCheckResultType
  singleLineFieldName?: string
}
interface LayerSourceSidePopperProps {
  id: string
  toggle: () => void
  onSettingChange: SettingChangeFunction
  updateConfigForLayerOptions: (newConfig?: IMConfig) => void
  trigger: HTMLElement
  isOpen: boolean
  dsConfigItemIndex: number
  config: IMConfig
  useDataSources: ImmutableArray<UseDataSource>
  popperFocusNode: HTMLElement
}

const LocatorSourceSidePopper = (props: LayerSourceSidePopperProps) => {
  const nls = hooks.useTranslate(defaultMessage, jimuiDefaultMessage, jimuCoreDefaultMessage)
  const debounceCheckUrlRef = useRef((url: string) => undefined)

  const appTheme = useTheme()
  const { id, trigger, toggle, isOpen, config, dsConfigItemIndex, popperFocusNode, onSettingChange, updateConfigForLayerOptions } = props
  const datasourceConfigItem: IMGeocodeConfig = config?.datasourceConfig?.[dsConfigItemIndex] as unknown as IMGeocodeConfig || Immutable({}) as IMGeocodeConfig
  const { configId, label, icon, geocodeURL, hint } = datasourceConfigItem as unknown as GeocodeConfig
  const [newGeocodeUrl, setNewGeocodeUrl] = React.useState(geocodeURL)
  const [isHadEnterGeocodeUrl, setIsHadEnterGeocodeUrl] = React.useState(false)
  const [newLabel, setNewLabel] = React.useState(label)
  const [urlCheckResults, setUrlCheckResultType] = React.useState(UrlCheckResultType.Pass)

  useEffect(() => {
    if (!isOpen) return
    if (datasourceConfigItem?.geocodeURL) {
      setIsHadEnterGeocodeUrl(true)
      setUrlCheckResultType(UrlCheckResultType.Pass)
      setNewGeocodeUrl(geocodeURL)
      setNewLabel(datasourceConfigItem?.label)
    } else {
      setIsHadEnterGeocodeUrl(false)
      setNewGeocodeUrl('')
      setNewLabel(DefaultGeocodeLabel)
      urlCheckResults === UrlCheckResultType.Pass && setUrlCheckResultType(UrlCheckResultType.InvalidURL)
    }
    // eslint-disable-next-line
  }, [dsConfigItemIndex, configId, isOpen])

  useEffect(() => {
    const checkGeocodeUrl = (url: string) => {
      //validate the geocode service url on change of user input url
      validateGeocodeService(url).then((urlCheckResult) => {
        !isHadEnterGeocodeUrl && setIsHadEnterGeocodeUrl(true)
        setUrlCheckResultType(urlCheckResult?.urlCheckResultType)
      }).catch(err => {
        setUrlCheckResultType(UrlCheckResultType.InvalidURL)
      })
    }
    debounceCheckUrlRef.current = lodash.debounce(checkGeocodeUrl, 500)
    // eslint-disable-next-line
  }, [])

  const onGeocodeUrlChange = (e) => {
    const value = e.target.value
    setNewGeocodeUrl(value)
    debounceCheckUrlRef.current(value)
  }

  const onGeocodeUrlInputBlur = (e) => {
    const value = e.target.value;
    (debounceCheckUrlRef as any).current?.cancel()
    validateGeocodeService(value).then((urlCheckResult) => {
      if (urlCheckResult?.urlCheckResultType === UrlCheckResultType.Pass) {
        setUrlCheckResultType(urlCheckResult?.urlCheckResultType)
        updateGeocodeUrl(value, urlCheckResult?.singleLineFieldName)
      } else if (geocodeURL) {
        setUrlCheckResultType(UrlCheckResultType.Pass)
        setNewGeocodeUrl(geocodeURL)
      }
    }).catch(err => {
      setUrlCheckResultType(UrlCheckResultType.Pass)
      setNewGeocodeUrl(geocodeURL)
    })
  }

  /**
   * Update geocode url
   */
  const updateGeocodeUrl = (geocodeServiceUrl: string, singleLineFieldName: string) => {
    const configIdList = getConfigIdList(config?.datasourceConfig?.asMutable({ deep: true }))
    const nextDsConfigId = configId || getNewConfigId(configIdList)
    let datasourceConfig = config?.datasourceConfig ? config.datasourceConfig.asMutable({ deep: true }) : [] as any
    const label = getDefaultGeocodeLabel(geocodeServiceUrl)
    const initDsConfigItem = {
      configId: nextDsConfigId,
      icon: null,
      label: label,
      hint: '',
      outputDataSourceId: `${id}_output_${nextDsConfigId}`,
      geocodeURL: geocodeServiceUrl,
      searchServiceType: SearchServiceType.GeocodeService,
      singleLineFieldName: singleLineFieldName
    }
    if (datasourceConfigItem?.configId) {
      datasourceConfig = datasourceConfig.map(el => {
        if (el?.configId === nextDsConfigId) {
          return initDsConfigItem
        } else {
          return el
        }
      })
    } else {
      datasourceConfig.push(initDsConfigItem as any)
    }
    const newConfig = config.setIn(['datasourceConfig'], datasourceConfig)
    updateConfigForLayerOptions(newConfig)
  }

  /**
   * Check whether geocode service is legal
   */
  const validateGeocodeService = async (geocodeServiceUrl: string): Promise<UrlCheckResult> => {
    const httpsRex = '^(([h][t]{2}[p][s])?://)'
    const urlRegExString = new RegExp(httpsRex)
    if (geocodeServiceUrl && urlRegExString.test(geocodeServiceUrl)) {
      try {
        return loadArcGISJSAPIModules(['esri/request']).then(modules => {
          const [esriRequest] = modules
          return esriRequest(geocodeServiceUrl, {
            query: {
              f: 'json'
            },
            responseType: 'json'
          }).then(res => {
            const result = res?.data || {}
            if (result?.capabilities) {
              const singleLineAddressField = result?.singleLineAddressField || {}
              return Promise.resolve({ urlCheckResultType: UrlCheckResultType.Pass, singleLineFieldName: singleLineAddressField?.name })
            } else {
              return Promise.resolve({ urlCheckResultType: UrlCheckResultType.InvalidURL } as UrlCheckResult)
            }
          })
        })
      } catch (e) {
        return Promise.resolve({ urlCheckResultType: UrlCheckResultType.InvalidURL })
      }
    } else {
      return Promise.resolve({ urlCheckResultType: UrlCheckResultType.NotHttps })
    }
  }

  /**
   * Fire callback when change layer config.
   */
  const onConfigItemChange = (key: string[], value: any) => {
    const newDatasourceConfig = config?.datasourceConfig?.asMutable({ deep: true })
    const newDatasourceConfigItem = datasourceConfigItem?.setIn(key, value)
    newDatasourceConfig?.splice(dsConfigItemIndex, 1, newDatasourceConfigItem?.asMutable({ deep: true }))
    const newConfig = config.setIn(['datasourceConfig'], newDatasourceConfig)
    onSettingChange({ id, config: newConfig })
  }

  const handleLabelChange = (event) => {
    const value = event?.target?.value
    setNewLabel(value)
  }

  const handleLabelAccept = value => {
    if (!value) {
      setNewLabel(label)
    } else {
      setNewLabel(value?.trim())
      onConfigItemChange(['label'], value?.trim())
    }
  }

  const handleHintChange = (event) => {
    const value = event?.target?.value
    onConfigItemChange(['hint'], value)
  }

  const exampleUrlHtml = sanitizer.sanitize(nls('exampleUrl', { url: `${DefaultGeocodeURL}` }))

  return (
    <SidePopper isOpen={isOpen} position='right' toggle={toggle} trigger={trigger} title={nls('setLocatorSource')} backToFocusNode={popperFocusNode}>
      <div className='w-100' css={css`height: calc(100% - 40px);overflow: auto;`}>
        <SettingSection style={{ paddingTop: 0 }}>
          <SettingRow flow='wrap' label={nls('locatorUrl')}>
            <TextArea
              placeholder={nls('enterUrl')}
              value={newGeocodeUrl || ''}
              style={{
                minHeight: polished.rem(100)
              }}
              onChange={onGeocodeUrlChange}
              onBlur={onGeocodeUrlInputBlur}
            />
            <div className='mt-2 text-break'><i style={{ fontSize: polished.rem(12), color: appTheme.colors?.palette?.dark[500] }} dangerouslySetInnerHTML={{ __html: exampleUrlHtml }}/></div>
            {(urlCheckResults !== UrlCheckResultType.Pass && isHadEnterGeocodeUrl) && <div className='d-flex w-100 align-items-center justify-content-between mt-1'>
              <WarningOutlined size={16} color={appTheme.colors?.palette?.danger[500]}/>
              <div
                style={{
                  width: 'calc(100% - 20px)',
                  margin: '0 4px',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  color: appTheme.colors?.palette?.danger[500]
                }}
              >
                {urlCheckResults === UrlCheckResultType.NotHttps ? nls('onluSupportedHTTPS') : nls('invalidUrlMessage')}
              </div>
            </div>}
          </SettingRow>
        </SettingSection>
        {(urlCheckResults === UrlCheckResultType.Pass && configId) && <div>
          <SettingSection>
            <SettingRow flow='wrap' label={nls('label')}>
              <TextInput size='sm' value={newLabel || ''} onChange={handleLabelChange} onAcceptValue={handleLabelAccept} className='w-100' placeholder={nls('findAddressOrPlace')}/>
            </SettingRow>
          </SettingSection>

          <SettingSection>
            <SettingRow label={nls('searchIcon')}>
              <IconPicker
                icon={icon}
                onChange={(icon) => { onConfigItemChange(['icon'], icon) }}
                configurableOption='none'
              />
            </SettingRow>
          </SettingSection>

          <SettingSection title={nls('searchOptions')}>
            <SettingRow flow='wrap' label={nls('searchHint')}>
              <TextInput size='sm' value={hint || ''} onChange={handleHintChange} className='w-100' placeholder={nls('findAddressOrPlace')}/>
            </SettingRow>
          </SettingSection>
        </div>}
      </div>
    </SidePopper>
  )
}

export default LocatorSourceSidePopper
