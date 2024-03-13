import { createSelector } from '@reduxjs/toolkit'
import { AppState } from '../store'
import { TokensGroup } from '@fabric/domain'

export const selectRootGroups = createSelector(
  (state: AppState) => state.tokens,
  tokens =>
    tokens.root
      .map(id => tokens.items.find(item => item.id === id))
      .filter((item): item is TokensGroup => item?.type === 'group'),
)

export const selectGroupGroups = (id: string) =>
  createSelector(
    (state: AppState) => state.tokens,
    tokens =>
      tokens.items
        .find(
          (item): item is TokensGroup =>
            item.type === 'group' && item.id === id,
        )
        ?.items.map(id =>
          tokens.items.find(
            (item): item is TokensGroup =>
              item.type === 'group' && item.id === id,
          ),
        )
        .filter((item): item is TokensGroup => item != null) ?? [],
  )
