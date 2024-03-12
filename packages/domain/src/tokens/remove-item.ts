import { produceWithPatches } from 'immer'
import { Tokens } from './schema'

export const removeItem = produceWithPatches((tokens: Tokens, id: string) => {
  const itemIndex = tokens.items.findIndex(item => item.id === id)
  if (itemIndex === -1) {
    throw new Error(`Item with id=${id} not found`)
  }
  for (const item of tokens.items) {
    if (item.type === 'group') {
      const itemIndex = item.items.indexOf(id)
      if (itemIndex !== -1) {
        item.items.splice(itemIndex, 1)
      }
    }
  }
  tokens.items.splice(itemIndex, 1)
})
