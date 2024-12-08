import { useEffect, useState } from 'react'
import { RouteObject, useRoutes } from 'react-router'

import { TLoadRemoteRoutesProps } from './types'
import { loadRemoteRoutes } from './utils'

export const RemoteRoutes = (props: TLoadRemoteRoutesProps) => {
    const [routes, setRoutes] = useState<RouteObject[] | undefined>()
    useEffect(() => {
        try {
            loadRemoteRoutes(props).then(setRoutes)
        } catch (e) {
            console.error(e)
        }
    }, [props])

    const Routes = useRoutes(routes || [])

    return routes ? Routes : 'routes loading...'
}
