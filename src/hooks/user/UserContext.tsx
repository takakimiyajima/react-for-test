import { createContext, useState, ReactNode } from 'react'
import { useQuery } from 'react-query'
import { User } from '@/entities/models/user'

type Context = {
  users: User[]
  isLoading: boolean
}

type UserContextProviderProps = {
  children: ReactNode
}

export const UserContext = createContext<Context | undefined>(undefined)

export const UserContextProvider = ({ children }: UserContextProviderProps) => {
  const [users, setUsers] = useState<User[]>([])

  const fetchUsers = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    return res.json()
  }

  const { data, isLoading, error } = useQuery<User[]>('UserContext', () => fetchUsers(), {
    retry: 0,
    onSuccess: (data: User[]) => setUsers(data),
    onError: () => console.log('error'),
  })

  const value = {
    users: users || data,
    isLoading,
    error,
  }

  if (isLoading) {
    return <div>Loading......</div>
  }

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}
