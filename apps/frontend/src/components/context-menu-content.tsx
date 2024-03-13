import {
  Content,
  ContextMenuContentProps as ContentProps,
} from '@radix-ui/react-context-menu'
import { forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'

type ContextMenuContentProps = ContentProps & {
  items: JSX.Element[]
}

export const ContextMenuContent = forwardRef<
  HTMLDivElement,
  ContextMenuContentProps
>(function ContextMenuContent({ className, items, ...props }, ref) {
  return (
    <Content
      ref={ref}
      {...props}
      className={twMerge(
        'animate-in fade-in-0 rounded-sm bg-white shadow-xl duration-200',
        className,
      )}
    >
      {items}
    </Content>
  )
})
