/* eslint-disable no-underscore-dangle */
/* eslint-disable camelcase */

type TWebpackInitSharing = (scope: string) => Promise<void>

declare const __webpack_init_sharing__: TWebpackInitSharing

type TWebpackShareScopes = {
    [key: string]: unknown
}

declare const __webpack_share_scopes__: TWebpackShareScopes

type TRemoteContainerGetReturn = {
    default: RouteObject[]
}

type TRemoteContainer = {
    init(shareScope: unknown): Promise<void>
    get(module: string): Promise<() => TRemoteContainerGetReturn>
}

interface Window {
    [key: string]: TRemoteContainer
}

declare const window: Window

declare const IS_DEV: boolean
