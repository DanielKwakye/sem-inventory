import {createBrowserRouter, RouterProvider} from "react-router";
import SalesIndexPage from "@/presentation/sales/pages/SalesIndexPage.tsx";
import AdminIndexPage from "@/presentation/admin/pages/AdminIndexPage.tsx";
import AuthIndexPage from "@/presentation/auth/pages/AuthIndexPage.tsx";
import {accountLoader} from "@/lib/loaders.ts";
import App from "@/App.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        id: "index",
        children: [
            { index:true, element: <AuthIndexPage /> },
            { id: "account", path: "account", loader: accountLoader, element: <App />,
                children: [
                    { path:"customer", element: <SalesIndexPage /> },
                    { path: "admin", element: <AdminIndexPage /> }
                ]
            },

        ]

    }
])

function AppRouter() {
    return (
        <RouterProvider router={router} />
    )
}

export default AppRouter