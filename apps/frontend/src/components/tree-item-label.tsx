import { forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'

export type TreeItemLabelProps = {
  active?: boolean
  level: number
}

export const TreeItemLabel = forwardRef<
  HTMLDivElement,
  JSX.IntrinsicElements['div'] & TreeItemLabelProps
>(function TreeItemLabel({ active, level, className, style, ...props }, ref) {
  return (
    <div
      ref={ref}
      {...props}
      className={twMerge(
        'rounded py-2 text-xs font-medium text-zinc-900 hover:bg-zinc-200 dark:text-white dark:hover:bg-zinc-800',
        active && 'bg-zinc-200 dark:bg-zinc-800',
        className,
      )}
      style={{
        paddingLeft: `calc(0.5rem + ${level + 1} * 0.5rem)`,
        paddingRight: '0.5rem',
        ...style,
      }}
    />
  )
})
