import { TokensGroup } from '@fabric/domain'
import { forwardRef } from 'react'
import { ContextMenu } from '../../components/context-menu'
import { ContextMenuContent } from '../../components/context-menu-content'
import { ContextMenuItem } from '../../components/context-menu-item'
import { ContextMenuTrigger } from '../../components/context-menu-trigger'
import { TreeItem, TreeItemProps } from '../../components/tree-item'
import { TreeItemLabel } from '../../components/tree-item-label'
import { useAppDispatch } from '../../state/hooks'
import {
  removeItemAction,
  removeItemFromRootAction,
} from '../../state/store/tokens'

type TokensTreeItemProps = Omit<TreeItemProps, 'label'> & {
  group: TokensGroup
}

export const TokensTreeItem = forwardRef<
  HTMLDivElement,
  JSX.IntrinsicElements['div'] & TokensTreeItemProps
>(function TokensTreeItem({ group, ...props }, ref) {
  const dispatch = useAppDispatch()

  return (
    <ContextMenu
      trigger={
        <ContextMenuTrigger asChild>
          <TreeItem
            ref={ref}
            {...props}
            label={config => (
              <TreeItemLabel {...config}>{group.name}</TreeItemLabel>
            )}
          />
        </ContextMenuTrigger>
      }
      content={
        <ContextMenuContent
          items={[
            <ContextMenuItem
              key="delete"
              onSelect={() => {
                dispatch(removeItemFromRootAction({ id: group.id }))
                dispatch(removeItemAction({ id: group.id }))
              }}
            >
              Delete
            </ContextMenuItem>,
          ]}
        />
      }
    />
  )
})
