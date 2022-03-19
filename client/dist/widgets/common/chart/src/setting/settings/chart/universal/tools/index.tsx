import { React, Immutable, defaultMessages as jimuCoreDefaultMessage } from 'jimu-core'
import { hooks, defaultMessages as jimuiDefaultMessage, Switch } from 'jimu-ui'
import { SettingRow } from 'jimu-ui/advanced/setting-components'
import { ImmutableObject } from 'seamless-immutable'
import { ChartTools, ChartType } from '../../../../../config'

interface ToolsProps {
  type: ChartType
  tools: ImmutableObject<ChartTools>
  onChange?: (tools: ImmutableObject<ChartTools>) => void
}

const DefaultTools: ImmutableObject<ChartTools> = Immutable({ cursorEnable: true })

export const Tools = (props: ToolsProps): React.ReactElement => {
  const { type = 'serial', tools: propTools = DefaultTools, onChange } = props

  const translate = hooks.useTranslate(jimuiDefaultMessage, jimuCoreDefaultMessage)
  const selectionLabel = type === 'pie' ? translate('selection') : `${translate('selection')} & ${translate('ZoomLabel')}`

  const cursorEnable = propTools?.cursorEnable ?? false

  const handleCursorEnableChange = (_, checked: boolean): void => {
    const tools = propTools.set('cursorEnable', checked)
    onChange?.(tools)
  }

  return (
    <div className='serial-tools w-100'>
      <SettingRow label={selectionLabel} flow='no-wrap' className='mt-3'>
        <Switch
          checked={cursorEnable}
          onChange={handleCursorEnableChange}
        />
      </SettingRow>
    </div>
  )
}
