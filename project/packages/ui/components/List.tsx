import '../../../apps/app/src/index.css'


interface itemType { name: string, url: string }
interface listType { list: itemType[] }

const List = ({ list }: listType) => {
  console.log(list)
  return (
    <div className="parent">
    {list.map((item: itemType, i: any) => (
      <div className="child"
      key={`${item.name}-${i}`}>{item.name}</div>
    ))}
    </div>
  )
}

export default List;
