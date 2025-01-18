import type { ComponentType } from 'react'

export type TLoadRemoteComponentProps = {
    remoteName: string
    remoteUrl: string
}

export type TRemoteComponents = {
    RemoteApp: ComponentType
    RemoteWidget: ComponentType
}
