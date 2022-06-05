import { useState } from 'react'
import Checkbox from '@/atoms/Checkbox'
import { getPopulation } from '@/services/api/getPopulation'
import { prefectures } from '@/static/prefectures'
import styles from '@/styles/Home.module.css'

const CheckboxList = () => {
  const [checkedItems, setCheckedItems] = useState({})

  const handleChange = (e: any, code: string) => {
    const tempCheckedItems = {
      ...checkedItems,
      [code]: e.target.checked,
    }
    setCheckedItems(tempCheckedItems)
    console.log(tempCheckedItems)

    e.target.checked ? getPopulation(code) : 'stateから対象データ削除'
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
