import { useRoutes } from 'react-router'

import { Providers } from './providers'
import { routes } from './routes'

export const RemoteApp = () => <Providers>{useRoutes(routes)}</Providers>

export default RemoteApp
