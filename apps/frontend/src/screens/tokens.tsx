import { CreateGroupButton } from './tokens/create-group-button'
import { TokensTree } from './tokens/tokens-tree'

export function TokensScreen() {
  return (
    <div className="grid grid-cols-[280px_auto]">
      <div className="grid grid-rows-[auto_1fr] gap-4 p-4">
        <div className="flex justify-between">
          <span className="font-sans text-base font-semibold">Tokens</span>
          <CreateGroupButton />
        </div>
        <TokensTree />
      </div>
      <div></div>
    </div>
  )
}
