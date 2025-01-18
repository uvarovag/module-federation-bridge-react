import { Layout } from 'pages/Layout'
import { RemoteComponent } from 'pages/RemoteComponent'

import type { RouteObject } from 'react-router'

export const routes: RouteObject[] = [
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: 'document/*',
                element: <RemoteComponent remoteName="documentApp" remoteUrl="http://localhost:3001/remoteEntry.js" />,
            },
            {
                path: 'user/*',
                element: <RemoteComponent remoteName="userApp" remoteUrl="http://localhost:3002/remoteEntry.js" />,
            },
        ],
    },
]
