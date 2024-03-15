import { PropsWithoutRef, forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'

export const IconButton = forwardRef<
  HTMLButtonElement,
  PropsWithoutRef<JSX.IntrinsicElements['button']>
>(function IconButton({ className, ...props }, ref) {
  return (
    <button
      ref={ref}
      {...props}
      className={twMerge(
        'text-gray-600 outline-none dark:text-gray-400',
        className,
      )}
    />
  )
})
