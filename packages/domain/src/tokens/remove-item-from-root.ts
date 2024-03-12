import { produceWithPatches } from 'immer'
import { Tokens } from './schema'

export const removeItemFromRoot = produceWithPatches(
  (tokens: Tokens, id: string) => {
    const itemIndex = tokens.root.indexOf(id)
    if (itemIndex === -1) {
      throw new Error(`Item with id=${id} not found`)
    }
    tokens.root.splice(itemIndex, 1)
  },
)
