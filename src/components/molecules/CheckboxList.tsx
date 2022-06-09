import { useState } from 'react'
import Checkbox from '@/components/atoms/Checkbox'
import { usePrefectureContext } from '@/context/PrefectureContext'
import { getPopulation } from '@/services/api/getPopulation'
import { prefectures } from '@/static/prefectures'
import { PrefecturePopulationList } from '@/type/PrefecturePopulationList.type'

const CheckboxList = () => {
  const { prefecturePopulationList, setPrefecturePopulationList } = usePrefectureContext()
  const [checkedItems, setCheckedItems] = useState<{ [code: string]: boolean }>({})

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
    setPrefecturePopulationList: React.Dispatch<React.SetStateAction<PrefecturePopulationList>>,
  ) => {
    delete prefecturePopulationList[code]
    setPrefecturePopulationList({ ...prefecturePopulationList })
  }

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
