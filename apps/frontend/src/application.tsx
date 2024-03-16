import './tailwind.css'

import { setup } from '@fabric/domain'
import { useEffect } from 'react'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'
import { WindowResizer } from './components/window-resizer'
import { router } from './router/router'
import { useStore } from './state/use-store'

export function Application() {
  const store = useStore()

  useEffect(() => {
    setup()
  }, [])

  return (
    <Provider store={store}>
      <RouterProvider router={router} />
      <WindowResizer />
    </Provider>
  )
}
