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
    <div className="rounded bg-white dark:bg-zinc-800">
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="px-3 py-2 text-left font-sans text-xs font-semibold text-black dark:text-white">
              Name
            </th>
            <th className="px-3 py-2 text-left font-sans text-xs font-semibold text-black dark:text-white">
              Type
            </th>
            <th className="px-3 py-2 text-left font-sans text-xs font-semibold text-black dark:text-white">
              Value
            </th>
            <th className="px-3 py-2 text-left font-sans text-xs font-semibold text-black dark:text-white">
              Preview
            </th>
          </tr>
        </thead>
        <tbody>
          {groups.map(group => (
            <tr
              key={group.id}
              className="border-t border-zinc-100 dark:border-zinc-700"
            >
              <td className="px-3 py-2 text-left font-sans text-xs text-black dark:text-white">
                {group.name}
              </td>
              <td
                className="px-3 py-2 text-left font-sans text-xs text-black dark:text-white"
                colSpan={3}
              >
                {group.type}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
