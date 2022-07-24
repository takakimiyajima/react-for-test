import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ThemeProvider } from 'styled-components'
import { Home } from '@/components/page/Home/Home'
import { Hoge } from '@/components/page/Hoge/Hoge'
import { UserContextProvider } from '@/hooks/UserContext'
import { THEME } from '@/constants/style'

const queryClient = new QueryClient()

const App = () => (
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <ThemeProvider theme={THEME}>
      <QueryClientProvider client={queryClient}>
        <UserContextProvider>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/hoge/:id' element={<Hoge />} />
          </Routes>
        </UserContextProvider>
      </QueryClientProvider>
    </ThemeProvider>
  </BrowserRouter>
)

export default App
