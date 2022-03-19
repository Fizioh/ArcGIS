/** @jsx jsx */
import { jsx, React, ReactRedux, IMState } from 'jimu-core'
import { AllWidgetSettingProps } from 'jimu-for-builder'
import { IMConfig } from '../config'
import DataSetting from './component/dataSetting'
import SearchOptions from './component/search-options'
// import ArrangementStyleSetting from './component/arrangement-style'
import { getDefaultGeocodeConfig, getInitOutDataSource, getNewConfigId } from './util'
import { getOrganizationGeocodeService } from '../utils/geocode-utils'
import { DefaultGeocodeLabel, DefaultGeocodeURL } from '../constants'
import { useEffect } from 'react'
interface ExtraProps {
  id: string
}

type SettingProps = AllWidgetSettingProps<IMConfig> & ExtraProps

const DefaultAGOLGeocodeService = {
  name: DefaultGeocodeLabel,
  url: DefaultGeocodeURL
}

const Setting = (props: SettingProps) => {
  const { config, id, portalUrl, onSettingChange, useDataSources } = props
  const portalSelf = ReactRedux.useSelector((state: IMState) => state?.asMutable({ deep: true })?.appStateInBuilder?.portalSelf)

  useEffect(() => {
    const isNewWidget = !config?.datasourceConfig
    if (isNewWidget) {
      setDefaultGecodeService()
    }
    // eslint-disable-next-line
  }, [])

  const setDefaultGecodeService = () => {
    getDefaultGeocodeService().then(geocodeList => {
      setDefaultServiceByOrganizationGeocode(geocodeList)
    }).catch(err => {
      setDefaultServiceByOrganizationGeocode([DefaultAGOLGeocodeService])
    })
  }

  /**
   * Set geocode service bygeocode service list in organization
  */
  const setDefaultServiceByOrganizationGeocode = (geocodeList) => {
    const configIdList = []
    const datasourceConfig = []
    const outputDsJsonList = []
    geocodeList?.forEach(geocodeServiceItem => {
      const newConfigId = getNewConfigId(configIdList)
      const outputDsJson = getInitOutDataSource(id, newConfigId, geocodeServiceItem.url, geocodeServiceItem?.name)
      const defaultGeocodeConfigItem = getDefaultGeocodeConfig({
        configId: newConfigId,
        id: id,
        hint: '',
        label: geocodeServiceItem?.name,
        geocodeServiceUrl: geocodeServiceItem.url,
        singleLineFieldName: geocodeServiceItem.singleLineFieldName
      })
      configIdList.push(newConfigId)
      datasourceConfig.push(defaultGeocodeConfigItem)
      outputDsJsonList.push(outputDsJson)
    })

    let newConfig = config?.setIn(['datasourceConfig'], datasourceConfig)
    newConfig = newConfig?.setIn(['hint'], '')
    onSettingChange({ id, config: newConfig }, outputDsJsonList)
  }

  /**
   * Get the geocode service list from the organization
   */
  const getDefaultGeocodeService = () => {
    if (portalSelf?.helperServices?.geocode) {
      return Promise.resolve(initGeocodeList(portalSelf?.helperServices?.geocode))
    } else {
      return getOrganizationGeocodeService(portalUrl).then(geocodeList => {
        return Promise.resolve(initGeocodeList(geocodeList))
      }, (err) => {
        return Promise.resolve([DefaultAGOLGeocodeService])
      })
    }
  }

  /**
   * Init geocode list
  */
  const initGeocodeList = (geocodeList: any[]) => {
    const newGeocodeList = geocodeList || []
    const hasDefaultAGOLGeocodeService = newGeocodeList?.filter(geocode => geocode?.url === DefaultGeocodeURL)?.length > 0
    if (!hasDefaultAGOLGeocodeService) {
      newGeocodeList.unshift(DefaultAGOLGeocodeService)
    }
    return newGeocodeList
  }

  return (
    <div className='widget-setting-search jimu-widget-search'>
      <DataSetting
        id={id}
        useDataSources={useDataSources}
        onSettingChange={onSettingChange}
        config={config}
      />
      <SearchOptions
        id={id}
        config={config}
        onSettingChange={onSettingChange}
        useDataSources={useDataSources}
      />
      {/* <ArrangementStyleSetting
        id={id}
        config={config}
        onSettingChange={onSettingChange}
      /> */}
    </div>
  )
}

export default Setting
