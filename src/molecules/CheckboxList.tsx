import { useState } from 'react'
import { usePrefectureContext } from '../context/PrefectureContext'
import { PrefecturePopulationList } from '../type/PrefecturePopulationList'
import Checkbox from '@/atoms/Checkbox'
import { getPopulation } from '@/services/api/getPopulation'
import { prefectures } from '@/static/prefectures'
import styles from '@/styles/Home.module.css'

const CheckboxList = () => {
  const { prefecturePopulationList, setPrefecturePopulationList } = usePrefectureContext()
  const [checkedItems, setCheckedItems] = useState({})

  const handleChange = (e: any, code: string) => {
    const tempCheckedItems = {
      ...checkedItems,
      [code]: e.target.checked,
    }
    setCheckedItems(tempCheckedItems)

    e.target.checked
      ? getPopulation(code, prefecturePopulationList, setPrefecturePopulationList)
      : deletePrefecturePopulationList(code, prefecturePopulationList, setPrefecturePopulationList)
  }

  const deletePrefecturePopulationList = (
    code: string,
    prefecturePopulationList: PrefecturePopulationList,
    setPrefecturePopulationList: ({}) => void,
  ) => {
    delete prefecturePopulationList[code]
    setPrefecturePopulationList({ ...prefecturePopulationList })
  }
  console.log(prefectures)

  return (
    <>
      <p>以下から表示したい都道府県をチェックしてください</p>
      <div
        style={{
          height: '200px',
          width: '40%',
          border: '1px solid #333',
          padding: '10px',
          overflow: 'scroll',
          minWidth: '300px',
        }}
      >
        {Object.keys(prefectures)
          .sort()
          .map((key, index) => {
            return (
              <label key={index}>
                <Checkbox
                  id={index}
                  value={prefectures[key]}
                  checked={key in checkedItems ? checkedItems[key] : false}
                  onChange={(e) => handleChange(e, key)}
                />
                {prefectures[key]}
                <br />
              </label>
            )
          })}
      </div>
    </>
  )
}

export default CheckboxList
