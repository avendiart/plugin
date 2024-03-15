import { produceWithPatches } from 'immer'
import { Tokens } from './schema'

export const updateGroup = produceWithPatches(
  (tokens: Tokens, id: string, update: { name?: string }) => {
    const group = tokens.items.find(item => item.id === id)
    if (group?.type !== 'group') {
      throw new Error(`Group token with id=${id} not found`)
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
      if (key === 'name') {
        const value = update[key]
        if (value) {
          group[key] = value
        }
      }
    }
  },
)
