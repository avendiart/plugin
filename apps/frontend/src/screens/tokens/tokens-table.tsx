import { useAppSelector } from '../../state/hooks'
import {
  selectGroupGroups,
  selectRootGroups,
} from '../../state/store/selectors'

type TokensTableProps = {
  parentId?: string
}

export function TokensTable({ parentId }: TokensTableProps) {
  const groups = useAppSelector(
    parentId ? selectGroupGroups(parentId) : selectRootGroups,
  )

  return (
    <table className="w-full border-collapse">
      <thead>
        <tr>
          <th className="p-1 text-left font-sans text-base font-semibold">
            Name
          </th>
          <th className="p-1 text-left font-sans text-base font-semibold">
            Type
          </th>
          <th className="p-1 text-left font-sans text-base font-semibold">
            Value
          </th>
          <th className="p-1 text-left font-sans text-base font-semibold">
            Preview
          </th>
        </tr>
      </thead>
      <tbody>
        {groups.map(group => (
          <tr key={group.id}>
            <td className="p-1 text-left font-sans text-base">{group.name}</td>
            <td className="p-1 text-left font-sans text-base" colSpan={3}>
              {group.type}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
