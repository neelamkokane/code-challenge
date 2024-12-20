import '../../../apps/app/src/index.css'
import { useDispatch } from 'react-redux'
import {removeItem} from '../../../apps/app/src/features/list/listSlice'

interface itemType { name: string, url: string }
interface listType { list: itemType[] }

const List = ({ list }: listType) => { 
  const dispatch = useDispatch()
  return (
    <div className="parent">
    {list.map((item: itemType, i: any) => (
      <div className="child" key={`${item.name}-${i}`}>
      <p>{item.name}</p>
      <button onClick={() => dispatch(removeItem(item.name))}>Delete</button>
      </div>
    ))}
    </div>
  )
}

export default List;
