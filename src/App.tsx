import {Outlet, ScrollRestoration} from "react-router";
import Navbar from "@/components/custom/Navbar.tsx";

function App() {
    return (
        <div>
            <ScrollRestoration />
            <Outlet />
            <div className="space-y-20 mx-12">
                <Navbar />

            </div>

        </div>
    )
}

export default App
