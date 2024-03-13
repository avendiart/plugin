import { RxTrash } from 'react-icons/rx'
import { Tree } from '../components/tree'
import { TreeItem } from '../components/tree-item'
import { TreeItemLabel } from '../components/tree-item-label'
import { useAppDispatch, useAppSelector } from '../state/hooks'
import { selectRootGroups } from '../state/store/selectors'
import {
  removeItemAction,
  removeItemFromRootAction,
} from '../state/store/tokens'
import { CreateGroupButton } from './tokens/create-group-button'

export function TokensScreen() {
  const dispatch = useAppDispatch()
  const groups = useAppSelector(selectRootGroups)

  return (
    <div className="grid grid-cols-[280px_auto]">
      <div className="grid grid-rows-[auto_1fr] gap-4 p-4">
        <div className="flex justify-between">
          <span className="font-sans text-base font-semibold">Tokens</span>
          <CreateGroupButton />
        </div>
        <Tree
          items={config =>
            groups.map(group => (
              <TreeItem
                {...config}
                key={group.id}
                label={config => (
                  <TreeItemLabel
                    {...config}
                    className="group flex items-center justify-between"
                    style={{
                      paddingRight: '0.5rem',
                    }}
                  >
                    {group.name}
                    <RxTrash
                      className="invisible h-4 w-4 hover:text-red-500 group-hover:visible"
                      onClick={() => {
                        dispatch(removeItemFromRootAction({ id: group.id }))
                        dispatch(removeItemAction({ id: group.id }))
                      }}
                    />
                  </TreeItemLabel>
                )}
              />
            ))
          }
        />
      </div>
      <div></div>
    </div>
  )
}
