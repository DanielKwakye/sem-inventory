import {Outlet, ScrollRestoration, useLocation} from "react-router";
import Navbar from "@/components/custom/Navbar.tsx";

function App() {

    const location = useLocation();

    return (
        <div className={location.pathname == '/' ? 'bg-[#f8f3f9]' : 'bg-white'}>
            <div className="max-w-7xl mx-auto ">
                <ScrollRestoration/>

                <div className="py-5 space-y-5 mx-12 h-screen">
                    <Navbar/>
                    {/*    Main layout */}
                    <Outlet/>
                </div>

            </div>
        </div>
    )
}

export default App
