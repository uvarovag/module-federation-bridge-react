import { Layout } from 'app/layout'
import { RemoteRoutes } from 'pages/RemoteRoutes'
import { RouteObject } from 'react-router'

export const routes: RouteObject[] = [
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: 'document/*',
                element: <RemoteRoutes remoteName="documentApp" remoteUrl="http://localhost:3001/remoteEntry.js" />,
            },
            {
                path: 'user/*',
                element: <RemoteRoutes remoteName="userApp" remoteUrl="http://localhost:3002/remoteEntry.js" />,
            },
        ],
    },
]
