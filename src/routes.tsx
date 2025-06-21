import {createBrowserRouter, RouterProvider} from "react-router";
import App from "@/App.tsx";
import SalesIndexPage from "@/presentation/sales/pages/SalesIndexPage.tsx";
import AdminIndexPage from "@/presentation/admin/pages/AdminIndexPage.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        id: "index",
        element: <App />,
        children: [
            { index:true, element: <SalesIndexPage /> },
            { path: 'admin', element: <AdminIndexPage /> }
        ]

    }
])

function AppRouter() {
    return (
        <RouterProvider router={router} />
    )
}

export default AppRouter