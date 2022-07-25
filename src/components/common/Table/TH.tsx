import clsx from 'clsx'
import styled from 'styled-components'
import { DownIcon, UpIcon } from '@/components/common/Icon'
import { Sort, ColumnConfig } from '@/entities/ui/table'

type ContainerProps<T> = {
  column: ColumnConfig<T>
  sort?: Sort
  width: number | string
}

type Props<T> = {
  className?: string
} & ContainerProps<T>

const Component = <T extends unknown>({ className, column, sort }: Props<T>) => {
  return (
    <th
      className={clsx(className, {
        clickable: !!sort?.setSortBy,
      })}
      onClick={() => sort?.setSortBy?.(column.name)}
    >
      <div className='content'>
        <p className='label'>{column.label?.toUpperCase()}</p>
        {sort?.by === column.name && sort.order === -1 && <DownIcon className='arrowIcon' />}
        {sort?.by === column.name && sort.order === 1 && <UpIcon className='arrowIcon' />}
      </div>
    </th>
  )
}

const StyledComponent = styled(Component)`
  padding: 8px;
  width: ${({ width }) => width};
  max-width: ${({ width }) => width};

  .clickable {
    cursor: 'pointer';
  }

  > .content {
    display: 'flex';
    align-items: 'center';

    > .label {
      font-weight: 'bold';
      margin: 0;
    }
    > .arrowIcon {
      margin-left: 8px;
      width: 12px;
      height: 12px;
    }
  }
` as typeof Component

const TH = <T extends unknown>(props: ContainerProps<T>) => {
  return <StyledComponent {...props} />
}

export { TH }
