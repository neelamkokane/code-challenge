
interface itemType { name: string, url: string }
interface listType { list: itemType[] }

const List = ({ list }: listType) => {
  console.log(list)
  return (
    <ul>
    {list.map((item: itemType, i: any) => (
      <li
      key={`${item.name}-${i}`}>{item.name}</li>
    ))}
    </ul>
  )
}

export default List;
