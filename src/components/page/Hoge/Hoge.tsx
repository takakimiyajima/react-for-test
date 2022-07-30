import styled from 'styled-components'
import { Table } from '@/components/common/Table'
import { useHogeContext } from '@/hooks/hoge'
import { getHogeColumns } from '@/utils/hoge/hoge-columns'

type Props = {
  className?: string
}

const Component = ({ className }: Props) => {
  const { hoges } = useHogeContext()

  return (
    <div className={className}>
      <h1 className='title'>Hoge</h1>
      <div className='table'>
        <Table columns={getHogeColumns()} data={hoges} />
      </div>
    </div>
  )
}

const Hoge = styled(Component)`
  padding: 24px;

  > .title {
    text-align: center;
    font-weight: bold;
    padding: 16px;
  }
  > .table {
    margin-top: 16px;
  }
`

export { Hoge }
