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
  background-color: ${(props) => props.theme.white};
  > .row {
    color: ${(props) => props.theme.darkRed};
    padding: 8px;
    word-wrap: 'break-word';
    border-style: 'solid';
    border-width: 0;
    border-bottom-width: 1;
    border-bottom-color: ${(props) => props.theme.black};
  }
` as typeof Component

const TableRow = <T extends unknown>(props: TableRowProps<T>) => {
  return <StyledComponent {...props} />
}

export { TableRow }
