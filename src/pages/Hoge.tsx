import { useParams } from 'react-router-dom'
import { Hoge } from '@/components/page/Hoge/Hoge'
import { HogeContextProvider } from '@/hooks/hoge'

const PageHoge = () => {
  const urlParams = useParams<{ id: string }>()

  return (
    <HogeContextProvider userId={urlParams.id}>
      <Hoge />
    </HogeContextProvider>
  )
}

export { PageHoge }
