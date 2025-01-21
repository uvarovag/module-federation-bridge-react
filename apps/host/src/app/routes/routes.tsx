import { Layout } from 'pages/Layout'
import { RemoteComponent } from 'shared'

import type { RouteObject } from 'react-router'

export const routes: RouteObject[] = [
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: 'document/*',
                element: <RemoteComponent module="RemoteApp" scope="documentApp" url="http://localhost:3001" />,
            },
            {
                path: 'user/*',
                element: <RemoteComponent module="RemoteApp" scope="userApp" url="http://localhost:3002" />,
            },
        ],
    },
]
