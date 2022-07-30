import { Home } from '@/components/page/Home/Home'
import { UserContextProvider } from '@/hooks/user'

const PageHome = () => {
  return (
    <UserContextProvider>
      <Home />
    </UserContextProvider>
  )
}

export { PageHome }
