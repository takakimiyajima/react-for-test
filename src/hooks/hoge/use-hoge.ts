import { useContext } from 'react'
import { HogeContext } from './HogeContext'

export const useHogeContext = () => {
  const context = useContext(HogeContext)

  if (context === undefined) {
    throw new Error('useHogeContext can only be used inside UserContext')
  }

  return context
}
