import axios from 'axios'
import { PrefecturePopulationList } from '../type/PrefecturePopulationList'

export const getPopulation = (
  code: string,
  prefecturePopulationList: PrefecturePopulationList,
  setPrefecturePopulationList: ({}) => void,
) => {
  axios
    .get(
      `https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?cityCode=-&prefCode=${code}`,
      {
        headers: {
          'X-API-KEY': process.env.NEXT_PUBLIC_API_KEY ?? '',
        },
      },
    )
    .then((response) => {
      setPrefecturePopulationList({
        ...prefecturePopulationList,
        [code]: response.data.result.data[0],
      })
    })
}
