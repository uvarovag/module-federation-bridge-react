import { createBrowserRouter, RouterProvider } from 'react-router'

import { Providers } from './providers'
import { routes } from './routes'

const router = createBrowserRouter(routes)

export const StandaloneApp = () => (
    <Providers>
        <RouterProvider router={router} />
    </Providers>
)
