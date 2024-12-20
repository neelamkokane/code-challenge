import { useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import List from 'ui/components/List'
import {setList} from './features/list/listSlice.js'

const api = "https://pokeapi.co/api/v2/pokemon?limit=151"

const App = () => {
const listData: any = useSelector(state => state)
const dispatch = useDispatch()
  // const [data, setData] = useState<any>([])

  useEffect(() => {
    let fetchRes = fetch(api)
    fetchRes.then(resp => resp.json())
    .then(data => {
      console.log(data)
      dispatch(setList(data.results))
  })
  },[])


  return (
  <>
    <h1>Pokemon list:</h1>
    <List list={listData?.list?.list}/>
  </>
  )
}

export default App
