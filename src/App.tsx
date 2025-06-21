import {Outlet, ScrollRestoration} from "react-router";
import Navbar from "@/components/custom/Navbar.tsx";

function App() {
    return (
        <div className="max-w-7xl mx-auto">
            <ScrollRestoration />

            <div className="py-5 space-y-5 mx-12 h-screen">
                <Navbar />
                {/*    Main layout */}
                <Outlet />
            </div>

        </div>
    )
}

export default App
