import { useState } from 'react'
import styled from 'styled-components'
import { Table } from '@/components/common/Table'
import { Dropdown, TextField } from '@/components/common/BaseInput'
import { getUserColumns } from '@/utils/user/user-columns'
import { parsedUsers } from '@/utils/user/parsed-users'
import { User } from '@/entities/models/user'
import { useUserContext } from '@/hooks'

type Props = {
  className?: string
}

const DOMAINS = [
  {
    value: '.com',
    label: '.com',
  },
  {
    value: '.net',
    label: '.net',
  },
  {
    value: 'other',
    label: 'other',
  },
]

const Component = ({ className }: Props) => {
  const { users } = useUserContext()
  const [searchKeyword, setSearchKeyword] = useState<string>('')
  const [selectedDropdown, setSelectedDropdown] = useState<string>('')

  const filteredUsersBySearchKey = (): User[] => {
    return searchKeyword
      ? users.filter(
          ({ name, email }) => name.includes(searchKeyword) || email.includes(searchKeyword),
        )
      : users
  }

  const filteredUsers = (): User[] => {
    return selectedDropdown
      ? filteredUsersBySearchKey().filter(({ website }) => {
          return selectedDropdown === 'other'
            ? !website.includes('.com') && !website.includes('.net')
            : website.includes(selectedDropdown)
        })
      : filteredUsersBySearchKey()
  }

  if (!users) {
    return <div>Nothing</div>
  }

  return (
    <div className={className}>
      <h1 className='title'>H1 Title</h1>
      <div className='fieldArea'>
        <TextField
          name='search-key'
          label='Search'
          setValue={setSearchKeyword}
          placeholder='Input name or email'
        />
        <Dropdown
          label='Domain'
          name='domain'
          options={DOMAINS}
          value={selectedDropdown}
          setValue={setSelectedDropdown}
        />
      </div>
      <div>
        <Table columns={getUserColumns()} data={parsedUsers(filteredUsers())} />
      </div>
    </div>
  )
}

const StyledComponent = styled(Component)`
  display: flex;
  flex-direction: column;

  .title {
    text-align: center;
    font-weight: bold;
    padding: 16px;
  }
  .fieldArea {
    margin-top: 16px;
    display: flex;
    justify-content: start;

    /* .fields {

    } */
  }
`

const Home = () => {
  return <StyledComponent />
}

export { Home }
