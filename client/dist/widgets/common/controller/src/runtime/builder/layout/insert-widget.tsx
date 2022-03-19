/** @jsx jsx */
import { React, jsx, css, LayoutItemConstructorProps, IMLayoutJson } from 'jimu-core'
import { WidgetListPopper } from 'jimu-ui/advanced/setting-components'
import { AvatarCard, AvatarCardProps } from '../../common'
import { hooks, utils } from 'jimu-ui'
import { isLayoutItemAcceptedForController } from '../utils'
import { getBuilderThemeVariables } from 'jimu-theme'
import plusOutlined from 'jimu-icons/svg/outlined/editor/plus.svg'
const { useState, useRef } = React

interface InsertWidgetProps extends Omit<AvatarCardProps, 'avatar'> {
  item: AvatarCardProps
  layout: IMLayoutJson
  insertSyncWidgetToLayout: (layout, item, container, itemRect, index) => void
}

const style = css`
  width: 300px;
  height: 300px;
  overflow-y: auto;
`

export const InsertWidget = (props: InsertWidgetProps) => {
  const { layout, item, insertSyncWidgetToLayout, ...others } = props
  const [open, setOpen] = useState(false)
  const nodeRef = useRef<HTMLButtonElement>(null)
  const buildThemeRef = useRef(getBuilderThemeVariables())

  const toggle = () => {
    setOpen(open => !open)
  }

  const handleClick = (evt: React.MouseEvent<HTMLDivElement>) => {
    evt.stopPropagation()
    toggle()
  }

  const handleClose = () => {
    setOpen(false)
    nodeRef.current?.focus()
  }

  const translate = hooks.useTranslate()

  const onItemSelect = (item: LayoutItemConstructorProps) => {
    const insertIndex = layout.order?.length ?? 0
    insertSyncWidgetToLayout(layout, item, {} as any, {} as any, insertIndex)
  }

  return <React.Fragment>
    <AvatarCard
      {...item}
      {...others}
      title={translate('addWidget')}
      icon={utils.toIconResult(plusOutlined, 'add')}
      ref={nodeRef}
      onClick={handleClick}>
    </AvatarCard>
    {open && <WidgetListPopper
      css={style}
      builderTheme={buildThemeRef.current}
      referenceElement={nodeRef.current}
      isItemAccepted={isLayoutItemAcceptedForController}
      onItemSelect={onItemSelect}
      onClose={handleClose} />}
  </React.Fragment>
}
