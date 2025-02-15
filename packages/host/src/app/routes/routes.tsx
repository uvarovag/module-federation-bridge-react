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
                element: <RemoteComponent module="RemoteApp" scope="remoteDocument" url="http://localhost:3001" />,
            },
            {
                path: 'user/*',
                element: <RemoteComponent module="RemoteApp" scope="remoteUser" url="http://localhost:3002" />,
            },
        ],
    },
]
