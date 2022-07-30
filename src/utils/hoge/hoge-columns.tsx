import { ColumnConfig } from '@/entities/ui/table'
import { Hoge } from '@/entities/models/hoge'

const getHogeColumns = (): ColumnConfig<Hoge>[] => {
  return [
    {
      label: 'title',
      name: 'title',
      size: 1,
      renderValue: ({ title }) => {
        return <p>{title}</p>
      },
    },
    {
      label: 'completed',
      name: 'completed',
      size: 1,
      renderValue: ({ completed }) => <p>{completed ? 'completed' : 'incomplete'}</p>,
    },
  ]
}

export { getHogeColumns }
