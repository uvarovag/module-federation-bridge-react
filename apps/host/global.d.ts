import type { TRemoteComponents } from 'pages/RemoteComponent/types'

type TWebpackInitSharing = (scope: string) => Promise<void>

type TWebpackShareScopes = {
    [key: string]: unknown
}

type TRemoteContainerGetReturn = TRemoteComponents

type TRemoteContainer = {
    init(shareScope: unknown): Promise<void>
    get(module: string): Promise<() => TRemoteContainerGetReturn>
}

declare global {
    interface Window {
        [key: string]: TRemoteContainer | undefined
    }

    const __webpack_share_scopes__: TWebpackShareScopes
    const __webpack_init_sharing__: TWebpackInitSharing
    const IS_DEV: boolean
}
