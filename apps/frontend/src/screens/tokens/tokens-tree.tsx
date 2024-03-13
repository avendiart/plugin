import { Tree } from '../../components/tree'
import { useAppSelector } from '../../state/hooks'
import { selectRootGroups } from '../../state/store/selectors'
import { TokensTreeItem } from './tokens-tree-item'

export function TokensTree() {
  const groups = useAppSelector(selectRootGroups)

  return (
    <Tree
      items={config =>
        groups.map(group => (
          <TokensTreeItem {...config} key={group.id} group={group} />
        ))
      }
    />
  )
}
