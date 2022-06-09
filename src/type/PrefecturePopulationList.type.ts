export interface PrefecturePopulationList {
  [code: string]: {
    label: string
    data: { year: number; value: number }[]
  }
}
