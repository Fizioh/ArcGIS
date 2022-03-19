/** @jsx jsx */
import { jsx, React, IconResult, ImmutableObject, lodash, ResizeObserver } from 'jimu-core'
import { hooks, Button, Icon, MobilePanel, Popper, Size, ButtonType } from 'jimu-ui'

export interface TaskListPopperWrapperProps {
  id: number
  icon?: string | ImmutableObject<IconResult>
  label?: string
  forceClose?: boolean
  popperTitle?: string
  buttonType?: ButtonType
  onWidthChange?: (id: number, width: number) => void
  onOpenedChange?: (id: number, isOpen: boolean) => void
  minSize: Size
  defaultSize: Size
  children: React.ReactElement
}

const popperModifiers = [{ name: 'preventOverflow', options: { padding: 1 } }]

export function TaskListPopperWrapper (props: TaskListPopperWrapperProps) {
  const { id, icon, label, forceClose, onOpenedChange, popperTitle, minSize, defaultSize, onWidthChange, buttonType = 'tertiary', children } = props
  const iconRef = React.useRef<HTMLButtonElement>()
  const widthRef = React.useRef(0)
  const [isOpen, setIsOpen] = React.useState(false)
  const [popperVersion, setPopperVersion] = React.useState(0)
  const isMobile = hooks.useCheckSmallBrowserSzieMode()

  React.useEffect(() => {
    if (forceClose) {
      setIsOpen(false)
    }
  }, [forceClose])

  hooks.useEffectOnce(() => {
    if (typeof onWidthChange === 'function') {
      widthRef.current = Math.round(iconRef.current.clientWidth)
      onWidthChange(id, widthRef.current)
      const resizeObserver = new ResizeObserver(lodash.throttle((entries) => {
        const width = Math.round(entries[0].contentRect.width)
        if (widthRef.current !== width) {
          widthRef.current = width
          onWidthChange(id, width)
        }
      }, 200))
      resizeObserver.observe(iconRef.current)

      return () => {
        resizeObserver.disconnect()
      }
    }
  })

  const togglePopper = React.useCallback(() => {
    if (typeof onOpenedChange === 'function') {
      onOpenedChange(id, !isOpen)
    }
    setIsOpen(!isOpen)
    setPopperVersion(popperVersion + 1)
  }, [id, isOpen, popperVersion, onOpenedChange])

  return (
    <div className='runtime-query__widget-popper'>
      <Button icon size='sm' type={buttonType} ref={iconRef} onClick={togglePopper}>
        {icon && <Icon
          size={16}
          {...(typeof icon === 'string' ? { icon, color: '' } : { icon: icon.svg, color: icon.properties.color })}
        />}
        {label && <span className='ml-2'>{label}</span>}
      </Button>
      {isMobile
        ? <MobilePanel open={isOpen} title={popperTitle} toggle={togglePopper}>
            {children}
          </MobilePanel>
        : <Popper
            className='ui-unit-popper ui-unit-popper_k-arrangement-icon flex-grow-1'
            floating
            open={isOpen}
            onHeaderClose={togglePopper}
            headerTitle={popperTitle}
            minSize={minSize}
            defaultSize={defaultSize}
            dragBounds='body'
            version={popperVersion}
            reference={iconRef.current}
            placement='bottom-start'
            modifiers={popperModifiers}
          >
            {children}
          </Popper>
      }
    </div>
  )
}
