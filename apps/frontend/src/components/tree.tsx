import { forwardRef } from 'react'

export type TreeProps = {
  level?: number
  items?: (config: { level: number }) => JSX.Element[]
}

export const Tree = forwardRef<
  HTMLDivElement,
  JSX.IntrinsicElements['div'] & TreeProps
>(function Tree({ items, level = 0, ...props }, ref) {
  return (
    <div ref={ref} {...props}>
      {items?.({
        level,
      })}
    </div>
  )
})
