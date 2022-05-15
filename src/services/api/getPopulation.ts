import axios from 'axios'

export const getPopulation = (code: string) => {
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
      console.log(response.data)
      // stateに入れる
    })
}
