import { produceWithPatches } from 'immer'
import { Tokens } from './schema'

export const updateSizeToken = produceWithPatches(
  (tokens: Tokens, id: string, update: { name?: string; value?: string }) => {
    const token = tokens.items.find(item => item.id === id)
    if (token?.type !== 'size') {
      throw new Error(`Size token with id=${id} not found`)
    }
    if (update.name) {
      const group = tokens.items.find(
        (item): item is typeof item & { type: 'group' } =>
          item.type === 'group' && item.items.includes(id),
      )
      if (group) {
        const groupItems = tokens.items.filter(item =>
          group.items.includes(item.id),
        )
        const itemWithSameName = groupItems.find(
          item => item.name === update.name,
        )
        if (itemWithSameName && itemWithSameName.id !== id) {
          throw new Error(
            `Item with name=${update.name} already in group=${group.id}`,
          )
        }
      }
    }
    for (const key in update) {
      if (key === 'name' || key === 'value') {
        const value = update[key]
        if (value) {
          token[key] = value
        }
      }
    }
  },
)
