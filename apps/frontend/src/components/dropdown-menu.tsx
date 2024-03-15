import {
  Root,
  DropdownMenuProps as RootProps,
  Portal,
} from '@radix-ui/react-dropdown-menu'

export type DropdownMenuProps = Omit<RootProps, 'children'> & {
  trigger: JSX.Element
  content: JSX.Element
}

export function DropdownMenu({
  trigger,
  content,
  ...props
}: DropdownMenuProps) {
  return (
    <Root {...props}>
      {trigger}
      <Portal>{content}</Portal>
    </Root>
  )
}
