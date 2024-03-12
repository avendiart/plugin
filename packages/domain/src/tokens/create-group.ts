import { produceWithPatches } from 'immer'
import { Tokens } from './schema'

export const createGroup = produceWithPatches(
  (tokens: Tokens, id: string, name: string) => {
    tokens.items.push({ id, name, type: 'group', items: [] })
  },
)
