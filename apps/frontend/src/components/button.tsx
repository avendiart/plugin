import { PropsWithoutRef, forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'

export const Button = forwardRef<
  HTMLButtonElement,
  PropsWithoutRef<JSX.IntrinsicElements['button']>
>(function Button({ className, ...props }, ref) {
  return (
    <button
      ref={ref}
      {...props}
      className={twMerge(
        'rounded border border-zinc-200 bg-white px-3 py-1 font-sans text-xs text-black outline-none dark:border-zinc-600 dark:bg-zinc-700 dark:text-white',
        className,
      )}
    />
  )
})
