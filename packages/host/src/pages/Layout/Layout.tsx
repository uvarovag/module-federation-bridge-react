import { Suspense } from 'react'
import { Outlet } from 'react-router'

import { Navbar } from 'widgets/Navbar'

export const Layout = () => (
    <Suspense fallback="loading...">
        <h1>host app</h1>
        <Navbar />
        <hr />
        <Outlet />
    </Suspense>
)
