import { forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'

type TreeItemLabelProps = {
  level: number
}

export const TreeItemLabel = forwardRef<
  HTMLDivElement,
  JSX.IntrinsicElements['div'] & TreeItemLabelProps
>(function TreeItemLabel({ level, className, style, ...props }, ref) {
  return (
    <div
      ref={ref}
      {...props}
      className={twMerge(
        'rounded-sm py-1.5 text-base font-medium text-gray-900 hover:bg-zinc-200',
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
