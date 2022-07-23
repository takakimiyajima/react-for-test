import { ColumnConfig } from '@/entities/components/table'
import { TableRow } from './TableRow'

type TableBodyProps<T> = {
  columns: ColumnConfig<T>[]
  data: T[]
}

const TableBody = <T extends unknown>({ columns, data }: TableBodyProps<T>) => {
  return (
    <tbody>
      {data.map((item, index) => (
        <TableRow columns={columns} item={item} key={index} />
      ))}
    </tbody>
  )
}

export { TableBody }
