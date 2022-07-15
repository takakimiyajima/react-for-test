import React, { useState, useEffect } from 'react'
import './Home.css'

type Address = {
  city: string
  suite: string
  street: string
  zipcode: string
}

type User = {
  id: number
  name: string
  email: string
  phone: string
  address: Address
  website: string
}

type Todo = {
  id: number
  completed: false
  title: string
  userId: number
}

export const Home = () => {
  const [users, setUsers] = useState<User[]>([])
  const [todos, setTodos] = useState<Todo[]>([])
  const [searchKeyword, setSearchKeyword] = useState<string>('')
  const [selectedDropdown, setSelectedDropdown] = useState<string>('')
  const [selectedUserId, setSelectedUserId] = useState<number>()

  /** User-related */
  const fetchUsersData = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const json = await response.json()
    setUsers(json)
  }

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

  const getFullAddress = (address: Address) => {
    const { suite, street, city, zipcode } = address
    return `${suite} ${street} ${city} ${zipcode}`.trim()
  }

  /** TODO-related */
  const fetchTodoData = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos')
    const json = await response.json()
    setTodos(json)
  }

  const todosByUserId = () => {
    const todoByUser = todos.filter(({ userId }) => userId === selectedUserId)
    const numOfCompleted = todoByUser.filter(({ completed }) => completed).length
    const numOfIncomplete = todoByUser.length - numOfCompleted
    const target = todoByUser.filter(({ completed }) => completed)

    return {
      todos: target,
      numOfCompleted,
      numOfIncomplete
    }
  }

  useEffect(() => {
    fetchUsersData()
    fetchTodoData()
  }, [])

  return (
    <div className="App">
      <h1>Simple keyword search</h1>
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
      {!!filteredUsers() && filteredUsers().length ? (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Address</th>
              <th>Website</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers().map((user, index) => (
              <tr key={`user-${index}`}>
                <td><button onClick={() => setSelectedUserId(user.id)}>{user.name}</button></td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{getFullAddress(user.address)}</td>
                <td>{user.website}</td>
              </tr>
            ))}
            </tbody>
          </table>
      )
      : <div>Nothing</div>}

      {selectedUserId && (
        <div className='todo'>
          <div className='title'>TODO Detail</div>
          <div className='status'>
            <div className='completed'>Total Completed Tasks: {todosByUserId().numOfCompleted}</div>
            <div className='incomplete'>Total Incomplete Tasks: {todosByUserId().numOfIncomplete}</div>
          </div>
          {todosByUserId().todos.map((todo, index) => (
            <div key={`todo-${index}`} className='detail'>
              <div>{todo.title}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
