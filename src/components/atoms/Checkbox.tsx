import { ChangeEventHandler } from 'react'

type Props = {
  id: number
  value: string
  checked: boolean
  onChange: ChangeEventHandler<HTMLInputElement>
}

const Checkbox = ({ id, value, checked, onChange }: Props) => {
  return (
    <input
      key={id}
      type='checkbox'
      name='inputNames'
      checked={checked}
      onChange={onChange}
      value={value}
    />
  )
}

export default Checkbox
