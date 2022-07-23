export type ColumnConfig<T> = {
  label?: string
  name: string
  size: number
  renderValue: React.FC<T>
}

export type Sort = {
  by?: string
  order?: -1 | 1
  setSortBy?: (sortBy: string) => void
}

export type Pagination = {
  page: number
  totalPages: number
  setPage: (page: number) => void
}
