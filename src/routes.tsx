import {createBrowserRouter, RouterProvider} from "react-router";
import App from "@/App.tsx";
import SalesIndexPage from "@/presentation/sales/pages/SalesIndexPage.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        id: "index",
        element: <App />,
        children: [
            { index:true, element: <SalesIndexPage /> }
        ]

    }
])

function AppRouter() {
    return (
        <RouterProvider router={router} />
    )
}

export default AppRouter