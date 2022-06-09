import { createContext, useState, useContext, ReactNode } from 'react'
import { PrefecturePopulationList } from '../type/PrefecturePopulationList.type'

export const PrefectureContext = createContext(
  {} as {
    prefecturePopulationList: PrefecturePopulationList
    setPrefecturePopulationList: React.Dispatch<React.SetStateAction<PrefecturePopulationList>>
  },
)

export const usePrefectureContext = () => {
  return useContext(PrefectureContext)
}

export const PrefectureProvider = (props: { children: ReactNode }) => {
  const children: ReactNode = props.children
  const [prefecturePopulationList, setPrefecturePopulationList] =
    useState<PrefecturePopulationList>({})

  const value = {
    prefecturePopulationList,
    setPrefecturePopulationList,
  }

  return <PrefectureContext.Provider value={value}>{children}</PrefectureContext.Provider>
}
