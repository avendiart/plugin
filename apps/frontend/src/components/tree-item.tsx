import { forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'

export type TreeItemProps = {
  tree?: (config: { level: number }) => JSX.Element
  label: (config: { level: number }) => JSX.Element
  level?: number
}

export const TreeItem = forwardRef<
  HTMLDivElement,
  JSX.IntrinsicElements['div'] & TreeItemProps
>(function TreeItem({ tree, label, level = 0, className, ...props }, ref) {
  return (
    <div ref={ref} {...props} className={twMerge('flex flex-col', className)}>
      {label({ level })}
      {tree?.({
        level: level + 1,
      })}
    </div>
  )
})
