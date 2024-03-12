import { produceWithPatches } from 'immer'
import { Tokens } from './schema'

export const removeItemFromGroup = produceWithPatches(
  (tokens: Tokens, parentId: string, itemId: string) => {
    const group = tokens.items.find(item => item.id === parentId)
    if (group?.type !== 'group') {
      throw new Error(`Group with id=${parentId} not found`)
    }
    const itemIndex = group.items.indexOf(itemId)
    if (itemIndex === -1) {
      throw new Error(`Item with id=${itemId} not found in group=${parentId}`)
    }
    group.items.splice(itemIndex, 1)
  },
)
