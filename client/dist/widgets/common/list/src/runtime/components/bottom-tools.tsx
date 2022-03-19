import { React, polished } from 'jimu-core'
import { Pagination, Button } from 'jimu-ui'
import { DirectionType, PageStyle } from '../../config'
import { LeftOutlined } from 'jimu-icons/outlined/directional/left'
import { UpOutlined } from 'jimu-icons/outlined/directional/up'
import { RightOutlined } from 'jimu-icons/outlined/directional/right'
import { DownOutlined } from 'jimu-icons/outlined/directional/down'

interface ListBottomToolProps {
  isRTL: boolean
  totalPage: number
  currentPage: number
  pageStyle: PageStyle
  direction: DirectionType
  scrollStatus: 'start' | 'end' | 'mid'
  isEditing: boolean
  isScrollEnd: boolean
  showLoading: boolean
  handleScrollUp: (evt: React.MouseEvent) => void
  handleScrollDown: (evt: React.MouseEvent) => void
  handleSwitchPage: (pageNum: number) => void
  formatMessage: (id: string, values?: { [key: string]: any }) => string
}

export function ListBottomTools (props: ListBottomToolProps) {
  const {
    isRTL,
    totalPage,
    pageStyle,
    direction,
    currentPage,
    scrollStatus,
    isScrollEnd,
    isEditing,
    showLoading,
    handleScrollDown,
    handleScrollUp,
    handleSwitchPage,
    formatMessage
  } = props
  return (
    <div className='bottom-tools w-100 d-flex align-items-center justify-content-center pl-2 pr-2'>
      {pageStyle === PageStyle.MultiPage
        ? (
          <Pagination
            size='sm'
            totalPage={totalPage}
            current={currentPage}
            onChangePage={handleSwitchPage}
            disabled={showLoading}
          />
          )
        : (
          <div className='d-flex scroll-navigator'>
            <Button
              title={formatMessage('previous')}
              disabled={scrollStatus === 'start'}
              type='secondary'
              size='sm'
              icon
              onClick={handleScrollUp}
            >
              {direction === DirectionType.Horizon ? <LeftOutlined size={12}/> : <UpOutlined size={12}/>}
            </Button>
            <Button
              title={formatMessage('next')}
              disabled={scrollStatus === 'end' || isScrollEnd}
              type='secondary'
              size='sm'
              style={
                isRTL
                  ? { marginRight: polished.rem(10) }
                  : { marginLeft: polished.rem(10) }
              }
              icon
              onClick={handleScrollDown}
            >
              {direction === DirectionType.Horizon ? <RightOutlined/> : <DownOutlined/>}
            </Button>
          </div>
          )}
      {window.jimuConfig.isInBuilder && isEditing && (
        <div className='editing-mask-bottom-tool' />
      )}
    </div>
  )
}
