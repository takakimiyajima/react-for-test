import { createContext, useState, ReactNode } from 'react'
import { useQuery } from 'react-query'
import { Hoge } from '@/entities/models/hoge'

type Context = {
  hoges: Hoge[]
  isLoading: boolean
}

type HogeContextProviderProps = {
  children: ReactNode
  userId?: string
}

export const HogeContext = createContext<Context | undefined>(undefined)

export const HogeContextProvider = ({ children, userId = '' }: HogeContextProviderProps) => {
  const [toDos, setToDos] = useState<Hoge[]>([])

  const fetchToDos = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}/todos`)
    return res.json()
  }

  const {
    data = [],
    isLoading,
    error,
  } = useQuery<Hoge[]>('HogeContext', () => fetchToDos(), {
    retry: 0,
    onSuccess: (data: Hoge[]) => setToDos(data),
    onError: () => console.log('error'),
  })

  const value = {
    hoges: toDos.length ? toDos : data,
    isLoading,
    error,
  }

  if (isLoading) {
    return <div>Loading......</div>
  }

  return <HogeContext.Provider value={value}>{children}</HogeContext.Provider>
}
