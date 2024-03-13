type TreeProps = {
  level?: number
  items?: (config: { level: number }) => JSX.Element[]
}

export function Tree({ items, level = 0 }: TreeProps) {
  return (
    <div>
      {items?.({
        level,
      })}
    </div>
  )
}
