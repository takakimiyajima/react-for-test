import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ThemeProvider } from 'styled-components'
import { PageHome } from '@/pages/Home'
import { PageHoge } from '@/pages/Hoge'
import { THEME } from '@/constants/style'

const queryClient = new QueryClient()

const App = () => (
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <ThemeProvider theme={THEME}>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path='/' element={<PageHome />} />
          <Route path='/users/:id/todos' element={<PageHoge />} />
        </Routes>
      </QueryClientProvider>
    </ThemeProvider>
  </BrowserRouter>
)

export default App
