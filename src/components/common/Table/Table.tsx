import styled from 'styled-components'
import { TableBody, TableHeader } from '@/components/common/Table'
import { ColumnConfig, Sort, Pagination } from '@/entities/ui/table'

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
