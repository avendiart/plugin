import { configureStore } from '@reduxjs/toolkit'
import { tokensReducer } from './store/tokens'

export function createStore(preloadedState?: {
  tokens?: ReturnType<typeof tokensReducer>
}) {
  const store = configureStore({
    devTools: true,
    preloadedState,
    reducer: {
      tokens: tokensReducer,
    },
  })
  store.subscribe(() => {
    parent.postMessage(
      {
        pluginMessage: {
          type: 'state-updated',
          payload: store.getState(),
        },
      },
      '*',
    )
  })
  return store
}

export type AppState = ReturnType<ReturnType<typeof createStore>['getState']>
export type AppDispatch = ReturnType<typeof createStore>['dispatch']
