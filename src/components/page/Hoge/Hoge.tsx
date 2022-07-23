import { useParams } from "react-router-dom"

export const Hoge = () => {
  const urlParams = useParams<{ id: string }>()

  return (
    <div className="App">
      <h1>{urlParams.id}</h1>
    </div>
  )
}
