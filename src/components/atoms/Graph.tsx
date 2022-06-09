import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import faker from 'faker'
import type { NextPage } from 'next'
import React from 'react'
import { Line } from 'react-chartjs-2'
import { usePrefectureContext } from '../../context/PrefectureContext'
import { prefectures } from '@/static/prefectures'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: '都道府県別人口数の推移',
    },
  },
}

const labels = ['1980年', '1990年', '2000年', '2010年', '2020年']

const Graph: NextPage = () => {
  const { prefecturePopulationList } = usePrefectureContext()

  const data = {
    labels,
    datasets: Object.entries(prefecturePopulationList).map(([key, value]) => {
      const r = faker.datatype.number({ min: 0, max: 255 })
      const g = faker.datatype.number({ min: 0, max: 255 })
      const b = faker.datatype.number({ min: 0, max: 255 })
      return {
        label: prefectures[key],
        data: [
          value.data[4]['value'],
          value.data[6]['value'],
          value.data[8]['value'],
          value.data[10]['value'],
          value.data[12]['value'],
        ],
        borderColor: `rgb(${r}, ${g}, ${b})`,
        backgroundColor: `rgba(${r}, ${g}, ${b}, 0.5)`,
      }
    }),
  }

  return <Line options={options} data={data} />
}

export default Graph
