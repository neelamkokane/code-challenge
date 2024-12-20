import { useEffect, useState } from 'react'
import List from 'ui/components/List'

const api = "https://pokeapi.co/api/v2/pokemon?limit=151"

const App = () => {

  const [data, setData] = useState<any>([])

  useEffect(() => {
    let fetchRes = fetch(api)
    fetchRes.then(resp => resp.json())
    .then(data => {
      console.log(data)
      setData(data.results)})
  },[])

  return (
  <>
    <h1>Pokemon list:</h1>
    <List/>
  </>
  )
}

export default App
