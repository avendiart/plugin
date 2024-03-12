import { produceWithPatches } from 'immer'
import { Tokens } from './schema'

export const addItemToGroup = produceWithPatches(
  (tokens: Tokens, parentId: string, itemId: string) => {
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
    const group = tokens.items.find(item => item.id === parentId)
    if (group?.type !== 'group') {
      throw new Error(`Group with id=${parentId} not found`)
    }
    const groupItems = tokens.items.filter(item =>
      group.items.includes(item.id),
    )
    if (groupItems.some(_item => _item.id === item.id)) {
      throw new Error(`Item with id=${itemId} already in group=${parentId}`)
    }
    if (groupItems.some(_item => _item.name === item.name)) {
      throw new Error(
        `Item with name=${item.name} already in group=${parentId}`,
      )
    }
    group.items.push(itemId)
  },
)
