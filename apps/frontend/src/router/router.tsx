import { createMemoryRouter } from 'react-router-dom'
import { TokensScreen } from '../screens/tokens'

export const router = createMemoryRouter([
  {
    path: '/:parentId?',
    element: <TokensScreen />,
  },
])
