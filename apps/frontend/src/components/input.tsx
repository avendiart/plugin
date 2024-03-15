import { PropsWithoutRef, forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'

export const Input = forwardRef<
  HTMLInputElement,
  PropsWithoutRef<JSX.IntrinsicElements['input']>
>(function Input({ className, ...props }, ref) {
  return (
    <input
      ref={ref}
      {...props}
      className={twMerge(
        'rounded border border-zinc-200 bg-white px-2 py-1 font-sans text-xs text-black outline-none dark:border-zinc-600 dark:bg-zinc-700 dark:text-white',
      )}
    />
  )
})
