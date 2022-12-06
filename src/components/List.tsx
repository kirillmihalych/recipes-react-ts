interface ListProps<T> {
  items: T[]
  renderItem: (item: T) => React.ReactNode
}

export default function List<T>(props: ListProps<T>) {
  return <div className='grid-list'>{props.items.map(props.renderItem)}</div>
}
