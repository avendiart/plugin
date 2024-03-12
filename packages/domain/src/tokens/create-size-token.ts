import { produceWithPatches } from 'immer'
import { Tokens } from './schema'

export const createSizeToken = produceWithPatches(
  (tokens: Tokens, id: string, name: string, value: string) => {
    tokens.items.push({ id, name, type: 'size', value })
  },
)
