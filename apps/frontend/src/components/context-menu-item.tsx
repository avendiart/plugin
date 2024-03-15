import { Item, ContextMenuItemProps } from '@radix-ui/react-context-menu'
import { forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'

export const ContextMenuItem = forwardRef<HTMLDivElement, ContextMenuItemProps>(
  function ContextMenuItem({ className, ...props }, ref) {
    return (
      <Item
        ref={ref}
        className={twMerge(
          'rounded px-4 py-1.5 text-xs font-medium text-zinc-900 outline-none hover:bg-zinc-200 dark:text-white dark:hover:bg-zinc-700',
          className,
        )}
        {...props}
      />
    )
  },
)
