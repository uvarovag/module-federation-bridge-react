import { importRemote } from '@module-federation/utilities'
import { lazy, Suspense } from 'react'

import type { ImportRemoteOptions } from '@module-federation/utilities'

export const RemoteComponent = (props: ImportRemoteOptions) => {
    const Component = lazy(() => importRemote(props))
    const { url, scope, module } = props
    return (
        <Suspense key={`${url}-${scope}-${module}`} fallback="loading...">
            <Component />
        </Suspense>
    )
}
