import styled from 'styled-components'
import { ColumnConfig } from '@/entities/components/table'

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
    padding: 0 8px;
    border-bottom: solid 0.5px ${(props) => props.theme.gray};
  }
` as typeof Component

const TableRow = <T extends unknown>(props: TableRowProps<T>) => {
  return <StyledComponent {...props} />
}

export { TableRow }
