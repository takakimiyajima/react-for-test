import { useContext } from 'react'
import { UserContext } from './UserContext'

export const useUserContext = () => {
  const context = useContext(UserContext)

  if (context === undefined) {
    throw new Error('useUserContext can only be used inside UserContext')
  }

  return context
}
