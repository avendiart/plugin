import { TokensGroup } from '@fabric/domain'
import { forwardRef } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ContextMenu } from '../../components/context-menu'
import { ContextMenuContent } from '../../components/context-menu-content'
import { ContextMenuItem } from '../../components/context-menu-item'
import { ContextMenuTrigger } from '../../components/context-menu-trigger'
import { TreeItem, TreeItemProps } from '../../components/tree-item'
import { TreeItemLabel } from '../../components/tree-item-label'
import { useAppDispatch, useAppSelector } from '../../state/hooks'
import {
  removeItemAction,
  removeItemFromGroupAction,
  removeItemFromRootAction,
} from '../../state/store/tokens'
import { CreateGroupButton } from './create-group-button'
import { selectGroupGroups } from '../../state/store/selectors'
import { TokensTree } from './tokens-tree'

type TokensTreeItemProps = Omit<TreeItemProps, 'tree' | 'label'> & {
  group: TokensGroup
  parentId?: string
}

export const TokensTreeItem = forwardRef<
  HTMLDivElement,
  JSX.IntrinsicElements['div'] & TokensTreeItemProps
>(function TokensTreeItem({ group, parentId, ...props }, ref) {
  const params = useParams()
  const navigate = useNavigate()
  const appDispatch = useAppDispatch()

  const groups = useAppSelector(selectGroupGroups(group.id))

  return (
    <ContextMenu
      trigger={
        <TreeItem
          ref={ref}
          {...props}
          label={config => (
            <ContextMenuTrigger asChild>
              <TreeItemLabel
                {...config}
                className="group flex justify-between"
                active={group.id === params.parentId}
                onClick={() => {
                  navigate(`/${group.id}`)
                }}
              >
                {group.name}
                <CreateGroupButton
                  className="invisible group-hover:visible"
                  parentId={group.id}
                />
              </TreeItemLabel>
            </ContextMenuTrigger>
          )}
          tree={
            groups.length > 0
              ? config => <TokensTree {...config} parentId={group.id} />
              : undefined
          }
        />
      }
      content={
        <ContextMenuContent
          items={[
            <ContextMenuItem
              key="delete"
              onSelect={() => {
                if (parentId) {
                  appDispatch(
                    removeItemFromGroupAction({ id: group.id, parentId }),
                  )
                } else {
                  appDispatch(removeItemFromRootAction({ id: group.id }))
                }
                appDispatch(removeItemAction({ id: group.id }))
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
