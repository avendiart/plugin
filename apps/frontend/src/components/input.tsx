import { PropsWithoutRef, forwardRef } from 'react'

export const Input = forwardRef<
  HTMLInputElement,
  PropsWithoutRef<JSX.IntrinsicElements['input']>
>(function Input(props, ref) {
  return (
    <input
      ref={ref}
      {...props}
      className="rounded border px-2 py-1 font-sans text-base"
    />
  )
})
