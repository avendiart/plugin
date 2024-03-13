import { PropsWithoutRef, forwardRef } from 'react'

export const Button = forwardRef<
  HTMLButtonElement,
  PropsWithoutRef<JSX.IntrinsicElements['button']>
>(function Button(props, ref) {
  return (
    <button
      ref={ref}
      {...props}
      className="rounded border px-3 py-1 font-sans text-base"
    />
  )
})
