import './tailwind.css'

import { setup } from '@fabric/domain'
import { useEffect } from 'react'
import { Provider } from 'react-redux'
import { TokensScreen } from './screens/tokens'
import { useStore } from './state/use-store'

export function Application() {
  const store = useStore()

  useEffect(() => {
    setup()
  }, [])

  return (
    <Provider store={store}>
      <TokensScreen />
    </Provider>
  )
}
