import styled from 'styled-components'
import { TableHeader } from '@/components/common/Table/TableHeader'
import { TableBody } from '@/components/common/Table/TableBody'

type Pagination = {
  page: number
  totalPages: number
  setPage: (page: number) => void
}

type Sort = {
  by?: string
  order?: -1 | 1
  setSortBy?: (sortBy: string) => void
}

type ColumnConfig<T> = {
  label?: string
  name: string
  size: number
  renderValue: React.FC<T>
}

type ContainerProps<T> = {
  columns: ColumnConfig<T>[]
  data: T[]
  sort?: Sort
  pagination?: Pagination
}

type Props<T> = {
  className?: string
} & ContainerProps<T>

const Component = <T extends unknown>({ className, columns, data }: Props<T>) => {
  return (
    <table className={className}>
      <TableHeader columns={columns} />
      <TableBody columns={columns} data={data} />
    </table>
  )
}

const StyledComponent = styled(Component)`
  width: 100%;
  table-layout: 'fixed';
  border-collapse: 'collapse';
` as typeof Component

const Table = <T extends unknown>(props: ContainerProps<T>) => {
  return <StyledComponent {...props} />
}

export { Table }
