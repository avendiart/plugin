import { z } from 'zod'

const tokensItemIdSchema = z.string().uuid()

export type TokensItemId = z.infer<typeof tokensItemIdSchema>

const tokensItemNameSchema = z.string().regex(/^[a-z0-9]+[a-z0-9-]*[a-z0-9]$/i)

export type TokensItemName = z.infer<typeof tokensItemNameSchema>

const baseTokensItemSchema = z.object({
  id: tokensItemIdSchema,
  name: tokensItemNameSchema,
})

export const sizeTokenSchema = baseTokensItemSchema.extend({
  type: z.enum(['size']),
  value: z.string(),
})

export type SizeToken = z.infer<typeof sizeTokenSchema>

export const colorTokenSchema = baseTokensItemSchema.extend({
  type: z.enum(['color']),
  value: z.string(),
})

export type ColorToken = z.infer<typeof colorTokenSchema>

export const tokenSchema = z.union([sizeTokenSchema, colorTokenSchema])

export type Token = z.infer<typeof tokenSchema>

export const tokensGroupSchema = baseTokensItemSchema.extend({
  type: z.enum(['group']),
  items: z.array(tokensItemIdSchema),
})

export type TokensGroup = z.infer<typeof tokensGroupSchema>

export const tokensSchema = z.object({
  root: z.array(tokensItemIdSchema),
  items: z.array(z.union([tokensGroupSchema, tokenSchema])),
})

export type Tokens = z.infer<typeof tokensSchema>
