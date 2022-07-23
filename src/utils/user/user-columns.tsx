import { ColumnConfig } from '@/entities/components/table'
import { User, ParsedUser } from '@/entities/models/user'

const getUserColumns = (
  users: User[],
): ColumnConfig<ParsedUser>[] => {
  return [
    {
      label: 'name',
      name: 'name',
      size: 1,
      renderValue: ({ name }) => <p>{name}</p>,
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