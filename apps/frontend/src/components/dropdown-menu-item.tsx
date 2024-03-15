import { Item, DropdownMenuItemProps } from '@radix-ui/react-dropdown-menu'
import { forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'

export const DropdownMenuItem = forwardRef<
  HTMLDivElement,
  DropdownMenuItemProps
>(function DropdownMenuItem({ className, ...props }, ref) {
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
})
