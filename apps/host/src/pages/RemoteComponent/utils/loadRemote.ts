import type { TLoadRemoteComponentProps, TRemoteComponents } from '../types'

const REMOTE_MODULE_NAME = './app'

export const loadRemote = async ({ remoteName, remoteUrl }: TLoadRemoteComponentProps): Promise<TRemoteComponents> => {
    await new Promise((resolve, reject) => {
        const script = document.createElement('script')
        script.src = remoteUrl
        script.onload = resolve
        script.onerror = () => reject(new Error(`Не удалось загрузить скрипт: ${script.src}`))
        document.head.appendChild(script)
    })

    await __webpack_init_sharing__('default')

    const container = window[remoteName]

    if (!container) {
        throw new Error(`Контейнер ${remoteName} не найден в глобальной области`)
    }

    await container.init(__webpack_share_scopes__.default)
    const factory = await container.get(REMOTE_MODULE_NAME)
    const module = factory()
    return module
}
