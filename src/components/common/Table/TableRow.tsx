import styled from 'styled-components'
import { ColumnConfig } from '@/entities/ui/table'

type TableRowProps<T> = {
  columns: ColumnConfig<T>[]
  item: T
}

type Props<T> = {
  className?: string
} & TableRowProps<T>

const Component = <T extends unknown>({ className, columns, item }: Props<T>) => {
  return (
    <tr className={className}>
      {columns.map(({ name, renderValue }, index) => (
        <td key={`${name}-${index}`} className='row'>
          {renderValue(item)}
        </td>
      ))}
    </tr>
  )
}

const StyledComponent = styled(Component)`
  > .row {
    padding: 4px 8px;
    border-bottom: solid 0.5px ${({ theme }) => theme.color.gray};
  }
` as typeof Component

const TableRow = <T extends unknown>(props: TableRowProps<T>) => {
  return <StyledComponent {...props} />
}

export { TableRow }
