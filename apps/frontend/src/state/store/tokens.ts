import {
  Tokens,
  addItemToGroup,
  addItemToRoot,
  createGroup,
  removeItem,
  removeItemFromGroup,
  removeItemFromRoot,
} from '@fabric/domain'
import { createAction, createReducer } from '@reduxjs/toolkit'

type TokensState = Tokens

const initialValue: TokensState = {
  root: [],
  items: [],
}

export const addItemToGroupAction = createAction(
  'tokens/addItemToGroup',
  (payload: { id: string; parentId: string }) => {
    return {
      type: 'tokens/addItemToGroup',
      payload,
    }
  },
)

export const addItemToRootAction = createAction(
  'tokens/addItemToRoot',
  (payload: { id: string }) => {
    return {
      type: 'tokens/addItemToRoot',
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

export const removeItemAction = createAction(
  'tokens/removeItem',
  (payload: { id: string }) => {
    return {
      type: 'tokens/removeItem',
      payload,
    }
  },
)

export const removeItemFromGroupAction = createAction(
  'tokens/removeItemFromGroup',
  (payload: { id: string; parentId: string }) => {
    return {
      type: 'tokens/removeItemFromGroup',
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

export const tokensReducer = createReducer(initialValue, builder => {
  builder
    .addCase(addItemToGroupAction, (state, action) => {
      try {
        const [newState] = addItemToGroup(
          state,
          action.payload.parentId,
          action.payload.id,
        )
        return newState
      } catch (error) {
        console.error(error)
        return state
      }
    })
    .addCase(addItemToRootAction, (state, action) => {
      const [newState] = addItemToRoot(state, action.payload.id)
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
    .addCase(removeItemAction, (state, action) => {
      const [newState] = removeItem(state, action.payload.id)
      return newState
    })
    .addCase(removeItemFromGroupAction, (state, action) => {
      const [newState] = removeItemFromGroup(
        state,
        action.payload.parentId,
        action.payload.id,
      )
      return newState
    })
    .addCase(removeItemFromRootAction, (state, action) => {
      const [newState] = removeItemFromRoot(state, action.payload.id)
      return newState
    })
})
