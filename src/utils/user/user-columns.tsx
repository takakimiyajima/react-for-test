import { Link } from 'react-router-dom'
import { ColumnConfig } from '@/entities/ui/table'
import { ParsedUser } from '@/entities/models/user'

const getUserColumns = (): ColumnConfig<ParsedUser>[] => {
  return [
    {
      label: 'name',
      name: 'name',
      size: 1,
      renderValue: ({ id, name }) => {
        // return <p>{name}</p>
        return <Link to={`/users/${id}/todos`}>{name}</Link>
      },
    },
    {
      label: 'email',
      name: 'email',
      size: 1,
      renderValue: ({ email }) => <p>{email}</p>,
    },
    {
      label: 'phone',
      name: 'phone',
      size: 1,
      renderValue: ({ phone }) => <p>{phone}</p>,
    },
    {
      label: 'address',
      name: 'address',
      size: 1,
      renderValue: ({ address }) => <p>{address}</p>,
    },
    {
      label: 'website',
      name: 'website',
      size: 1,
      renderValue: ({ website }) => <p>{website}</p>,
    },
  ]
}

export { getUserColumns }
