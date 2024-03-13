import './tailwind.css'

import { setup } from '@fabric/domain'
import { useEffect } from 'react'
import { Provider } from 'react-redux'
import { useStore } from './state/use-store'
import { RouterProvider } from 'react-router-dom'
import { router } from './router/router'

export function Application() {
  const store = useStore()

  useEffect(() => {
    setup()
  }, [])

  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  )
}
