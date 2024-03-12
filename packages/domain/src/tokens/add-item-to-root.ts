import { produceWithPatches } from 'immer'
import { Tokens } from './schema'

export const addItemToRoot = produceWithPatches(
  (tokens: Tokens, itemId: string) => {
    const item = tokens.items.find(item => item.id === itemId)
    if (!item) {
      throw new Error(`Item with id=${itemId} not found`)
    }
    if (tokens.root.includes(itemId)) {
      throw new Error(`Item with id=${itemId} already at root`)
    }
    const groupWithItem = tokens.items.find(
      item => item.type === 'group' && item.items.includes(itemId),
    )
    if (groupWithItem) {
      throw new Error(
        `Item with id=${itemId} already in group=${groupWithItem.id}`,
      )
    }
    const rootItems = tokens.items.filter(item => tokens.root.includes(item.id))
    if (rootItems.some(_item => _item.id === item.id)) {
      throw new Error(`Item with id=${itemId} already at root`)
    }
    if (rootItems.some(_item => _item.name === item.name)) {
      throw new Error(`Item with name=${item.name} already at root`)
    }
    tokens.root.push(itemId)
  },
)
