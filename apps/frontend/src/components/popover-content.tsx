import { Content, PopoverContentProps } from '@radix-ui/react-popover'
import { forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'

export const PopoverContent = forwardRef<HTMLDivElement, PopoverContentProps>(
  function PopoverContent({ className, ...props }, ref) {
    return (
      <Content
        ref={ref}
        sideOffset={4}
        className={twMerge(
          'animate-in fade-in rounded-sm bg-white shadow-xl duration-200 dark:bg-zinc-800',
          className,
        )}
        {...props}
      />
    )
  },
)
