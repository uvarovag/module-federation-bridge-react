import type { ComponentType } from 'react'

import { createRemoteComponent } from '@module-federation/bridge-react'
import { importRemote } from '@module-federation/utilities'
// import { Suspense } from 'react'

import type { ImportRemoteOptions } from '@module-federation/utilities'

const Error = () => <span>error!!!</span>
const Loading = () => <span>loading...</span>

export const RemoteComponent = (props: ImportRemoteOptions) => {
    const Component = createRemoteComponent({
        loader: () => importRemote(props),
        fallback: Error,
        loading: <Loading />,
    }) as unknown as ComponentType
    return <Component />
}

// export const RemoteComponent = (props: ImportRemoteOptions) => {
//     const Component = lazy(() => importRemote(props))
//     const { url, scope, module } = props
//     return (
//         <Suspense key={`${url}-${scope}-${module}`} fallback="loading...">
//             <Component />
//         </Suspense>
//     )
// }
