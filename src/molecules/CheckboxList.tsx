import { useState, useEffect } from 'react'
import Checkbox from '@/atoms/Checkbox'
import { prefectures } from '@/static/prefectures'
import styles from '@/styles/Home.module.css'

const CheckboxList = () => {
  const [checkedItems, setCheckedItems] = useState({})

  const handleChange = (e: any, code: string) => {
    setCheckedItems({
      ...checkedItems,
      [code]: e.target.checked,
    })
    console.log(checkedItems)
  }

  return (
    <>
      <p>以下から表示したい都道府県をチェックしてください</p>
      <div>
        {Object.entries(prefectures).map(([key, value], index) => {
          return (
            <label key={index}>
              <Checkbox
                id={index}
                value={value}
                checked={key in checkedItems ? checkedItems[key] : false}
                onChange={(e) => handleChange(e, key)}
              />
              {value}
            </label>
          )
        })}
      </div>
    </>
  )
}

export default CheckboxList
