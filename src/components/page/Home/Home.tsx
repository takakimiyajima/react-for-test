import { useState } from 'react'
import styled from 'styled-components'
import { Table } from '@/components/common/Table/Table'
import { getUserColumns } from '@/utils/user/user-columns'
import { parsedUsers } from '@/utils/user/parsed-users'
import { User } from '@/entities/models/user'
import { useUserContext } from '@/hooks'

type Props = {
  className?: string
}

const Component = ({ className }: Props) => {
  const { users } = useUserContext()
  const [searchKeyword, setSearchKeyword] = useState<string>('')
  const [selectedDropdown, setSelectedDropdown] = useState<string>('')

  const filteredUsers = () => {
    if (!searchKeyword && !selectedDropdown) {
      return users
    }

    let modUsers: User[] = []
    if (selectedDropdown) {
      modUsers = users.filter(({ website }) => website.includes(selectedDropdown))
    }

    if (searchKeyword) {
      const target = modUsers.length ? modUsers: users
      modUsers = target.filter(({ name, email }) => name.includes(searchKeyword) || email.includes(searchKeyword))
    }

    return modUsers
  }

  if (!filteredUsers().length) {
    return <div>Nothing</div>
  }

  return (
    <div className={className}>
      <h1 className='title'>H1 Title</h1>
      <div>
        <label htmlFor="search-keyword">Search</label>
        <input
          id="search-keyword"
          className="search"
          type="text"
          onChange={(e) => setSearchKeyword(e.target.value)}
          placeholder={"Input name or email"}
        />
      </div>

      <p>Domain filter</p>
      <label>
        <select name="domain" onChange={(e) => setSelectedDropdown(e.target.value)}>
          <option value="">No selected</option>
          <option value=".com">.com</option>
          <option value=".net">.net</option>
          <option value="other">other</option>
        </select>
      </label>
      <Table columns={getUserColumns(users)} data={parsedUsers(users)} />
    </div>
  )
}

const StyledComponent = styled(Component)`
  .title {
    text-align: center;
    font-weight: bold;
  }
  .search {
    margin-left: 8px;
  }
`

const Home = () => {
  return <StyledComponent />
}

export { Home }
