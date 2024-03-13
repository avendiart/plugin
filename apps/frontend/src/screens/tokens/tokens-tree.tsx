import { Tree } from '../../components/tree'
import { useAppSelector } from '../../state/hooks'
import {
  selectGroupGroups,
  selectRootGroups,
} from '../../state/store/selectors'
import { TokensTreeItem } from './tokens-tree-item'

type TokensTreeProps = {
  level?: number
  parentId?: string
}

export function TokensTree({ level, parentId }: TokensTreeProps) {
  const groups = useAppSelector(
    parentId ? selectGroupGroups(parentId) : selectRootGroups,
  )

  return (
    <Tree
      level={level}
      items={config =>
        groups.map(group => (
          <TokensTreeItem
            {...config}
            key={group.id}
            group={group}
            parentId={parentId}
          />
        ))
      }
    />
  )
}
