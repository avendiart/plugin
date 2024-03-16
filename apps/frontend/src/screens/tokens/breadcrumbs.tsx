import { Children, Fragment } from 'react'
import { useAppSelector } from '../../state/hooks'
import { selectRootGroups } from '../../state/store/selectors'
import { useNavigate } from 'react-router'
import { createSelector } from '@reduxjs/toolkit'
import { AppState } from '../../state/store'
import { TokensGroup } from '@fabric/domain'

type BreadcrumbsProps = {
  groupId?: string
}

const itemsSelector = (groupId?: string) =>
  createSelector(
    (state: AppState) => state.tokens.items,
    items => {
      let path: { name: string; id: string }[] = []
      const groups = items.filter(
        (item): item is TokensGroup => item.type === 'group',
      )
      let current = groups.find(item => item.id === groupId)
      while (current) {
        path.unshift({
          name: current.name,
          id: current.id,
        })
        current = groups.find(item => item.items.includes(current!.id))
      }
      return path
    },
  )

export function Breadcrumbs({ groupId }: BreadcrumbsProps) {
  const navigate = useNavigate()
  const items = useAppSelector(itemsSelector(groupId))

  return (
    <div className="flex gap-2">
      {[
        <span
          key="root"
          className="text-xs text-black dark:text-white"
          onClick={() => {
            navigate('/')
          }}
        >
          All tokens
        </span>,
        ...items.map(item => (
          <span
            key={item.id}
            className="text-xs text-black dark:text-white"
            onClick={() => {
              navigate(`/${item.id}`)
            }}
          >
            {item.name}
          </span>
        )),
      ].map((child, index) => (
        <Fragment key={child.key}>
          {index !== 0 && (
            <span className="text-xs text-black dark:text-white">/</span>
          )}
          {child}
        </Fragment>
      ))}
    </div>
  )
}
