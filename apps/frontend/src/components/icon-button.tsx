import { PropsWithoutRef, forwardRef } from 'react'

export const IconButton = forwardRef<
  HTMLButtonElement,
  PropsWithoutRef<JSX.IntrinsicElements['button']>
>(function IconButton(props, ref) {
  return <button ref={ref} {...props} className="text-gray-600" />
})
