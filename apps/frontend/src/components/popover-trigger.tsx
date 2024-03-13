import { Trigger, PopoverTriggerProps } from '@radix-ui/react-popover'
import { forwardRef } from 'react'

export const PopoverTrigger = forwardRef<
  HTMLButtonElement,
  PopoverTriggerProps
>(function PopoverTrigger(props, ref) {
  return <Trigger ref={ref} {...props} />
})
