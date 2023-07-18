import { Outlet } from "react-router-dom"
export default function AuthLayout() {
    return (
        <main>
            <img src="" alt="imagen logotipo" />

            <div>
                <Outlet/>
            </div>
            
        </main>
    )
    }
    