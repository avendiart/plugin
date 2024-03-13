type TreeItemProps = {
  tree?: (config: { level: number }) => JSX.Element
  label: (config: { level: number }) => JSX.Element
  level?: number
}

export function TreeItem({ tree, label, level = 0 }: TreeItemProps) {
  return (
    <div className="flex flex-col">
      {label({ level })}
      {tree?.({
        level: level + 1,
      })}
    </div>
  )
}
