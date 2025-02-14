import { createBrowserRouter, RouterProvider } from 'react-router'

import { Providers } from './providers'
import { routes } from './routes'

import type { ProviderParams } from '@module-federation/bridge-react'

export const App = ({ basename }: ProviderParams) => {
    const router = createBrowserRouter(routes, {
        basename,
    })
    return (
        <Providers>
            <RouterProvider router={router} />
        </Providers>
    )
}
