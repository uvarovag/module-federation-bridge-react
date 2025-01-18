import type { ComponentType } from 'react'

import { lazy, useEffect, useState } from 'react'

import { loadRemote } from './utils'

import type { TLoadRemoteComponentProps } from './types'

export const RemoteComponent = (props: TLoadRemoteComponentProps) => {
    const [RemoteComponent, setRemoteComponent] = useState<ComponentType | undefined>()
    useEffect(() => {
        try {
            setRemoteComponent(lazy(() => loadRemote(props).then((module) => ({ default: module.RemoteApp }))))
        } catch (error) {
            console.error(error)
        }
    }, [props])

    return RemoteComponent ? <RemoteComponent /> : 'routes loading...'
}
