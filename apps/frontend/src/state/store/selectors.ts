import { createSelector } from '@reduxjs/toolkit'
import { AppState } from '../store'
import { TokensGroup } from '@fabric/domain'

export const selectRootGroups = createSelector(
  [(state: AppState) => state.tokens],
  tokens =>
    tokens.root
      .map(id => tokens.items.find(item => item.id === id))
      .filter((item): item is TokensGroup => item?.type === 'group'),
)
