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
        'select-none rounded py-2 text-xs font-medium text-zinc-900 hover:bg-zinc-100 dark:text-white dark:hover:bg-zinc-800',
        active &&
          'bg-zinc-200 hover:bg-zinc-200 dark:bg-zinc-700 dark:hover:bg-zinc-700',
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
