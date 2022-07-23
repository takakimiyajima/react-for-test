import styled from 'styled-components'

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
  column: ColumnConfig<T>
  sort?: Sort
  width: number | string
}

type Props<T> = {
  className?: string
} & ContainerProps<T>



const Component = <T extends unknown>({ className, column, width, sort }: Props<T>) => {
  return (
    <th className={className}
      onClick={() => sort?.setSortBy?.(column.name)}
    >
      <div>
        <p>{column.label?.toUpperCase()}</p>
        {sort?.by === column.name && sort.order === -1 && "↓"}
        {sort?.by === column.name && sort.order === 1 && '↑'}
      </div>
    </th>
  )
}

const StyledComponent = styled(Component)`
  background-color: ${(props) => props.theme.white};
` as typeof Component

const TH = <T extends unknown>(props: ContainerProps<T>) => {
  return <StyledComponent {...props} />
}

export { TH }