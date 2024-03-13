import {
  Tokens,
  addItemToRoot,
  createGroup,
  removeItem,
  removeItemFromRoot,
} from '@fabric/domain'
import { createAction, createReducer } from '@reduxjs/toolkit'

type TokensState = Tokens

const initialValue: TokensState = {
  root: [],
  items: [],
}

export const addItemToRootAction = createAction(
  'tokens/addItemToRoot',
  (payload: { id: string }) => {
    return {
      type: 'tokens/addItemToRoot',
      payload,
    }
  },
)

export const removeItemFromRootAction = createAction(
  'tokens/removeItemFromRoot',
  (payload: { id: string }) => {
    return {
      type: 'tokens/removeItemFromRoot',
      payload,
    }
  },
)

export const removeItemAction = createAction(
  'tokens/removeItem',
  (payload: { id: string }) => {
    return {
      type: 'tokens/removeItem',
      payload,
    }
  },
)

export const createGroupAction = createAction(
  'tokens/createGroup',
  (payload: { id: string; name: string }) => {
    return {
      type: 'tokens/createGroup',
      payload,
    }
  },
)

export const tokensReducer = createReducer(initialValue, builder => {
  builder
    .addCase(addItemToRootAction, (state, action) => {
      const [newState] = addItemToRoot(state, action.payload.id)
      return newState
    })
    .addCase(removeItemFromRootAction, (state, action) => {
      const [newState] = removeItemFromRoot(state, action.payload.id)
      return newState
    })
    .addCase(removeItemAction, (state, action) => {
      const [newState] = removeItem(state, action.payload.id)
      return newState
    })
    .addCase(createGroupAction, (state, action) => {
      const [newState] = createGroup(
        state,
        action.payload.id,
        action.payload.name,
      )
      return newState
    })
})
