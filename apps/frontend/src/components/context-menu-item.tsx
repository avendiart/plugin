import { Item, ContextMenuItemProps } from '@radix-ui/react-context-menu'
import { forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'

export const ContextMenuItem = forwardRef<HTMLDivElement, ContextMenuItemProps>(
  function ContextMenuItem({ className, ...props }, ref) {
    return (
      <Item
        ref={ref}
        className={twMerge(
          'rounded px-4 py-1.5 text-base font-medium text-gray-900 hover:bg-zinc-200',
          className,
        )}
        {...props}
      />
    )
  },
)
