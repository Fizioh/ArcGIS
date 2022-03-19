/** @jsx jsx */
import { React, jsx, css, SerializedStyles, IMThemeVariables, Immutable } from 'jimu-core'
import { Icon, Button } from 'jimu-ui'
import { ToggleBtnColor, ICON_TYPE } from '../config'
import leftIcon from 'jimu-icons/svg/outlined/directional/left.svg'
import rightIcon from 'jimu-icons/svg/outlined/directional/right.svg'
import upIcon from 'jimu-icons/svg/outlined/directional/up.svg'
import downIcon from 'jimu-icons/svg/outlined/directional/down.svg'

const ICONS = {}
ICONS[ICON_TYPE.Left] = leftIcon
ICONS[ICON_TYPE.Right] = rightIcon
ICONS[ICON_TYPE.Up] = upIcon
ICONS[ICON_TYPE.Down] = downIcon

export interface SidebarControllerProps {
  expanded: boolean
  icon: ICON_TYPE
  iconSize: number
  color: ToggleBtnColor
  shouldFlip: boolean
  width: number
  height: number
  style: any
  theme: IMThemeVariables
  onClick: (e) => void
}

export class SidebarController extends React.PureComponent<SidebarControllerProps> {
  getStyle (): SerializedStyles {
    const { width, height } = this.props

    return css`
      padding: 0;
      width: ${width}px;
      height: ${height}px;

      .jimu-icon {
        margin: 0;
      }
    `
  }

  flipStyle (style: {borderRadius?: string}): React.CSSProperties {
    if (!this.props.shouldFlip) {
      return style
    }
    let result = Immutable(style)
    if (style.borderRadius != null) {
      const fourSides = style.borderRadius.split(' ')
      result = result.set('borderRadius', `${fourSides[1]} ${fourSides[0]} ${fourSides[3]} ${fourSides[2]}`)
    }
    return result
  }

  render (): JSX.Element {
    const { icon, iconSize, style, expanded, shouldFlip, onClick } = this.props
    const rotate = shouldFlip ? 180 : 0
    return (
      <Button
        className='sidebar-controller d-flex justify-content-center align-items-center'
        css={this.getStyle()} style={this.flipStyle(style)} onClick={onClick}
        aria-expanded={expanded}
      >
        <Icon
          className='icon' rotate={expanded ? 0 + rotate : 180 + rotate}
          icon={ICONS[icon]} size={iconSize}
        />
      </Button>
    )
  }
}
