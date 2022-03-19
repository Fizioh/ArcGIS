/** @jsx jsx */
import { React, css, jsx, AllWidgetProps, Immutable, ImmutableArray, polished } from 'jimu-core'
import { ViewVisibilityContext, ViewVisibilityContextProps, PageVisibilityContext } from 'jimu-layouts/layout-runtime'
import { IMConfig, DatasourceConfigItem, ArrangementStyle, NewDatasourceConfigItem } from '../config'
import SearchSetting from './component/search-setting'
import SearchInput from './component/search'
import CreateDatasource from './component/create-datasource'
const { useEffect, useState, useRef } = React
type SearchProps = AllWidgetProps<IMConfig>

const Widget = (props: SearchProps) => {
  const { config, id } = props
  const searchConRef = useRef<HTMLDivElement>(null)
  const [datasourceConfig, setDatasourceConfig] = useState(Immutable([]) as ImmutableArray<NewDatasourceConfigItem>)
  const [isShowSearchInput, setIsShowSearchInput] = useState(false)
  useEffect(() => {
    initDatasourceConfig()
    // eslint-disable-next-line
  }, [config])

  const STYLE = css`
    & {
      height: ${polished.rem(32)};
      margin-top: 1px;
      margin-left: 1px;
    }
  `
  const onDatasourceConfigChange = (newDatasourceConfig: ImmutableArray<NewDatasourceConfigItem>) => {
    newDatasourceConfig && setDatasourceConfig(newDatasourceConfig)
  }

  const initDatasourceConfig = () => {
    const dsConfig = config?.datasourceConfig || Immutable([]) as ImmutableArray<DatasourceConfigItem>
    const newDsConfig = []
    dsConfig.forEach(configItem => {
      const newConfigItem = (configItem as any)?.setIn(['enable'], true)
      newDsConfig.push(newConfigItem)
    })
    setDatasourceConfig(Immutable(newDsConfig))
  }

  const checkIsShowSearchInput = () => {
    if (config?.arrangementStyle === ArrangementStyle.Style1) {
      return true
    } else {
      return isShowSearchInput
    }
  }

  const onShowSearchInputChange = (isShow: boolean) => {
    setIsShowSearchInput(isShow)
  }

  return (
    <ViewVisibilityContext.Consumer>
      {({ isInView, isInCurrentView }: ViewVisibilityContextProps) => {
        const isSearchInCurrentView = isInView ? isInCurrentView : true
        return (
          <PageVisibilityContext.Consumer>
            {(isWidgetInCurrentPage) => {
              return (
                <div className='widget-search jimu-widget'>
                  <div className='d-flex w-100 align-items-center' css={STYLE} ref={searchConRef}>
                    <div>
                      {(config?.datasourceConfig?.length > 1 && checkIsShowSearchInput()) && <SearchSetting
                        className='h-100'
                        config={config}
                        datasourceConfig={datasourceConfig}
                        onDatasourceConfigChange={onDatasourceConfigChange}
                      />}
                    </div>
                    <SearchInput
                      id={id}
                      className='flex-grow-1 h-100'
                      reference={searchConRef}
                      datasourceConfig={datasourceConfig}
                      config={config}
                      isShowSearchInput={checkIsShowSearchInput()}
                      onShowSearchInputChange={onShowSearchInputChange}
                      isInCurrentView={isSearchInCurrentView}
                      isWidgetInCurrentPage={isWidgetInCurrentPage}
                    />
                    <CreateDatasource
                      id={id}
                      datasourceConfig={datasourceConfig}
                    />
                  </div>
                </div>
              )
            }}
          </PageVisibilityContext.Consumer>
        )
      }}
    </ViewVisibilityContext.Consumer>
  )
}

export default Widget
