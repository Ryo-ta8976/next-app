import { createContext, useState, useContext } from 'react'
import { PrefecturePopulationList } from '../type/PrefecturePopulationList'

export const PrefectureContext = createContext({})

export const usePrefectureContext = () => {
  return useContext(PrefectureContext)
}

export const PrefectureProvider = ({ children }) => {
  const [prefecturePopulationList, setPrefecturePopulationList] =
    useState<PrefecturePopulationList>({})

  const value = {
    prefecturePopulationList,
    setPrefecturePopulationList,
  }

  return <PrefectureContext.Provider value={value}>{children}</PrefectureContext.Provider>
}
