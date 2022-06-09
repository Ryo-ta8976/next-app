type Props = {
  id: number
  value: string
  checked: boolean
  onChange: (e: any, code: string) => void
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
