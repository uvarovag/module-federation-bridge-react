import type { ComponentType } from 'react'

import { createRemoteComponent } from '@module-federation/bridge-react'
import { importRemote } from '@module-federation/utilities'

import type { ImportRemoteOptions } from '@module-federation/utilities'

const Error = () => <span>error!!!</span>
const Loading = () => <span>loading...</span>

export const RemoteComponent = (props: ImportRemoteOptions) => {
    const Component = createRemoteComponent<ComponentType, 'propTypes' | 'displayName'>({
        loader: () => importRemote(props),
        fallback: Error,
        loading: <Loading />,
    })
    return <Component />
}
