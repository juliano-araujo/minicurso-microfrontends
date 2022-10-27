import { Outlet } from 'react-router-dom'
import { Navbar } from '@mp/ds'

export function Template(){
    return (
        <section>
            <Navbar />
            <Outlet />
        </section>
    )
}