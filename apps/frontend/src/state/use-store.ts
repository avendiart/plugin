import { BackendMessage } from '@fabric/messages'
import { useEffect, useMemo, useState } from 'react'
import { AppState, createStore } from './store'

export function useStore() {
  const [initialState, setInitialState] = useState<AppState>()
  const store = useMemo(() => createStore(initialState), [initialState])

  useEffect(() => {
    const listener = (
      event: MessageEvent<{
        pluginMessage: BackendMessage
      }>,
    ) => {
      if (event.data.pluginMessage.type === 'state-loaded') {
        setInitialState(event.data.pluginMessage.state)
      }
    }
    window.addEventListener('message', listener)
    return () => {
      window.removeEventListener('message', listener)
    }
  }, [])

  return store
}
