import { generateId } from '@fabric/domain'
import { RxPlus } from 'react-icons/rx'
import { ContextMenu } from '../../components/context-menu'
import { ContextMenuContent } from '../../components/context-menu-content'
import { ContextMenuItem } from '../../components/context-menu-item'
import { ContextMenuTrigger } from '../../components/context-menu-trigger'
import { DropdownMenu } from '../../components/dropdown-menu'
import { DropdownMenuContent } from '../../components/dropdown-menu-content'
import { DropdownMenuItem } from '../../components/dropdown-menu-item'
import { DropdownMenuTrigger } from '../../components/dropdown-menu-trigger'
import { IconButton } from '../../components/icon-button'
import { useAppDispatch, useAppSelector } from '../../state/hooks'
import { selectGroupItems, selectRootItems } from '../../state/store/selectors'
import {
  addItemToGroupAction,
  addItemToRootAction,
  createColorTokenAction,
  createSizeTokenAction,
  removeItemAction,
  removeItemFromGroupAction,
  removeItemFromRootAction,
  updateColorTokenAction,
  updateGroupAction,
  updateSizeTokenAction,
} from '../../state/store/tokens'
import { Breadcrumbs } from './breadcrumbs'
import { EditableValue } from './editable-value'

type TokensTableProps = {
  parentId?: string
}

export function TokensTable({ parentId }: TokensTableProps) {
  const appDispatch = useAppDispatch()
  const items = useAppSelector(
    parentId ? selectGroupItems(parentId) : selectRootItems,
  )

  return (
    <div className="grid grid-rows-[auto_1fr] gap-4">
      <div className="flex justify-between">
        <Breadcrumbs groupId={parentId} />
        <DropdownMenu
          trigger={
            <DropdownMenuTrigger asChild>
              <IconButton>
                <RxPlus className="h-4 w-4" />
              </IconButton>
            </DropdownMenuTrigger>
          }
          content={
            <DropdownMenuContent
              align="end"
              items={[
                <DropdownMenuItem
                  key="size"
                  onSelect={() => {
                    const lastPlaceholderToken = items
                      .filter(item => item?.name.match(/size-\d+/))
                      .toSorted((a, b) => a.name.localeCompare(b.name))
                      .findLast(item => item?.name.match(/size-\d+/))

                    const id = generateId()
                    appDispatch(
                      createSizeTokenAction({
                        name: `size-${Number(lastPlaceholderToken?.name.replace('size-', '') ?? 0) + 1}`,
                        value: '16px',
                        id,
                      }),
                    )
                    if (parentId) {
                      appDispatch(addItemToGroupAction({ id, parentId }))
                    } else {
                      appDispatch(addItemToRootAction({ id }))
                    }
                  }}
                >
                  Size
                </DropdownMenuItem>,
                <DropdownMenuItem
                  key="color"
                  onSelect={() => {
                    const lastPlaceholderToken = items
                      .filter(item => item?.name.match(/color-\d+/))
                      .toSorted((a, b) => a.name.localeCompare(b.name))
                      .findLast(item => item?.name.match(/color-\d+/))

                    const id = generateId()
                    appDispatch(
                      createColorTokenAction({
                        name: `color-${Number(lastPlaceholderToken?.name.replace('color-', '') ?? 0) + 1}`,
                        value: '#FFFFFF',
                        id,
                      }),
                    )
                    if (parentId) {
                      appDispatch(addItemToGroupAction({ id, parentId }))
                    } else {
                      appDispatch(addItemToRootAction({ id }))
                    }
                  }}
                >
                  Color
                </DropdownMenuItem>,
              ]}
            />
          }
        />
      </div>
      <div className="rounded bg-white dark:bg-zinc-800">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="w-1/4 px-3 py-2 text-left font-sans text-xs font-semibold text-black dark:text-white">
                Name
              </th>
              <th className="w-1/4 px-3 py-2 text-left font-sans text-xs font-semibold text-black dark:text-white">
                Type
              </th>
              <th className="w-1/4 px-3 py-2 text-left font-sans text-xs font-semibold text-black dark:text-white">
                Value
              </th>
              <th className="w-1/4 px-3 py-2 text-left font-sans text-xs font-semibold text-black dark:text-white">
                Preview
              </th>
            </tr>
          </thead>
          <tbody>
            {items.map(item => (
              <ContextMenu
                key={item.id}
                trigger={
                  <ContextMenuTrigger asChild>
                    <tr className="border-t border-zinc-100 data-[state=open]:bg-zinc-100 dark:border-zinc-700 dark:data-[state=open]:bg-zinc-700">
                      <td className="px-3 py-2 text-left font-sans text-xs text-black dark:text-white">
                        <EditableValue
                          value={item.name}
                          onChange={name => {
                            if (item.type === 'group') {
                              appDispatch(
                                updateGroupAction({
                                  id: item.id,
                                  name,
                                }),
                              )
                            }
                            if (item.type === 'color') {
                              appDispatch(
                                updateColorTokenAction({
                                  id: item.id,
                                  name,
                                  value: item.value,
                                }),
                              )
                            }
                            if (item.type === 'size') {
                              appDispatch(
                                updateSizeTokenAction({
                                  id: item.id,
                                  name,
                                  value: item.value,
                                }),
                              )
                            }
                          }}
                        />
                      </td>
                      {item.type === 'group' ? (
                        <td
                          className="px-3 py-2 text-left font-sans text-xs text-black dark:text-white"
                          colSpan={3}
                        >
                          {item.type}
                        </td>
                      ) : (
                        <>
                          <td className="px-3 py-2 text-left font-sans text-xs text-black dark:text-white">
                            {item.type}
                          </td>
                          <td className="px-3 py-2 text-left font-sans text-xs text-black dark:text-white">
                            <EditableValue
                              value={item.value}
                              onChange={value => {
                                if (item.type === 'color') {
                                  appDispatch(
                                    updateColorTokenAction({
                                      id: item.id,
                                      name: item.name,
                                      value,
                                    }),
                                  )
                                }
                                if (item.type === 'size') {
                                  appDispatch(
                                    updateSizeTokenAction({
                                      id: item.id,
                                      name: item.name,
                                      value,
                                    }),
                                  )
                                }
                              }}
                            />
                          </td>
                          <td className="px-3 py-2 text-left font-sans text-xs text-black dark:text-white">
                            {item.value}
                          </td>
                        </>
                      )}
                    </tr>
                  </ContextMenuTrigger>
                }
                content={
                  <ContextMenuContent
                    items={[
                      <ContextMenuItem
                        key="delete"
                        onSelect={() => {
                          if (parentId) {
                            appDispatch(
                              removeItemFromGroupAction({
                                id: item.id,
                                parentId,
                              }),
                            )
                          } else {
                            appDispatch(
                              removeItemFromRootAction({ id: item.id }),
                            )
                          }
                          appDispatch(removeItemAction({ id: item.id }))
                        }}
                      >
                        Delete
                      </ContextMenuItem>,
                    ]}
                  />
                }
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
