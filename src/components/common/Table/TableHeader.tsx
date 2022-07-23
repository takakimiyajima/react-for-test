import styled from 'styled-components'
import { Sort, ColumnConfig } from '@/entities/ui/table'
import { TH } from './TH' 

type ContainerProps<T> = {
  columns: ColumnConfig<T>[]
  sort?: Sort
}

type Props<T> = {
  className?: string
} & ContainerProps<T>

const Component = <T extends unknown>({ className, columns, sort }: Props<T>) => {
  const fullWeight = columns.reduce((acc, value) => acc + value.size, 0)

  return (
    <thead className={className}>
      <tr>
        {columns.map((column, index) => {
          const percent = Math.floor((column.size / fullWeight) * 100)

          return <TH key={`th-${index}`} column={column} sort={sort} width={`${percent}%`} />
        })}
      </tr>
    </thead>
  )
}

const StyledComponent = styled(Component)`
  background-color: ${(props) => props.theme.gray};
` as typeof Component

const TableHeader = <T extends unknown>(props: ContainerProps<T>) => {
  return <StyledComponent {...props} />
}

export { TableHeader }
