import {
  Root,
  ContextMenuProps as RootProps,
  Portal,
} from '@radix-ui/react-context-menu'

export type ContextMenuProps = Omit<RootProps, 'children'> & {
  trigger: JSX.Element
  content: JSX.Element
}

export function ContextMenu({ trigger, content, ...props }: ContextMenuProps) {
  return (
    <Root {...props}>
      {trigger}
      <Portal>{content}</Portal>
    </Root>
  )
}
