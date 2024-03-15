import {
  Content,
  DropdownMenuContentProps as ContentProps,
} from '@radix-ui/react-dropdown-menu'
import { forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'

type DropdownMenuContentProps = ContentProps & {
  items: JSX.Element[]
}

export const DropdownMenuContent = forwardRef<
  HTMLDivElement,
  DropdownMenuContentProps
>(function DropdownMenuContent({ className, items, ...props }, ref) {
  return (
    <Content
      ref={ref}
      {...props}
      className={twMerge(
        'animate-in fade-in-0 rounded bg-white shadow-xl duration-200 dark:bg-zinc-800',
        className,
      )}
    >
      {items}
    </Content>
  )
})
