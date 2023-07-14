import { createBrowserRouter }from 'react-router-dom'
import Layout from './layaouts/Layout'

const router = createBrowserRouter([
    {
        path:'/',
        element: <Layout />
    }
])

export default router