import {
  Root,
  PopoverProps as RootProps,
  Portal,
} from '@radix-ui/react-popover'

export type PopoverProps = Omit<RootProps, 'children'> & {
  trigger: JSX.Element
  content: JSX.Element
}

export function Popover({ trigger, content, ...props }: PopoverProps) {
  return (
    <Root {...props}>
      {trigger}
      <Portal>{content}</Portal>
    </Root>
  )
}
