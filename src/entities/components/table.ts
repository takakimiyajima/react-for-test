export type Sort = {
  by?: string
  order?: -1 | 1
  setSortBy?: (sortBy: string) => void
}

export type ColumnConfig<T> = {
  label?: string
  name: string
  size: number
  renderValue: React.FC<T>
}
