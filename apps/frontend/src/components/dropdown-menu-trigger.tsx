import {
  Trigger,
  DropdownMenuTriggerProps,
} from '@radix-ui/react-dropdown-menu'
import { forwardRef } from 'react'

export const DropdownMenuTrigger = forwardRef<
  HTMLButtonElement,
  DropdownMenuTriggerProps
>(function DropdownMenuTrigger(props, ref) {
  return <Trigger ref={ref} {...props} />
})
