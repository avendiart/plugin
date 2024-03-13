import { Trigger, ContextMenuTriggerProps } from '@radix-ui/react-context-menu'
import { forwardRef } from 'react'

export const ContextMenuTrigger = forwardRef<
  HTMLSpanElement,
  ContextMenuTriggerProps
>(function ContextMenuTrigger(props, ref) {
  return <Trigger ref={ref} {...props} />
})
