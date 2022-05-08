import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'

type Props = {
  id: number
  value: string
  checked: boolean
  onChange: (e: any, code: string) => void
}

const Checkbox = ({ id, value, checked, onChange }: Props) => {
  return (
    <input
      id={id}
      type='checkbox'
      name='inputNames'
      checked={checked}
      onChange={onChange}
      value={value}
    />
  )
}

export default Checkbox
