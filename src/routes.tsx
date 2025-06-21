import {createBrowserRouter, RouterProvider} from "react-router";
import App from "@/App.tsx";
import AdminIndexPage from "@/presentation/admin/pages/AdminIndexPage.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        id: "index",
        element: <App />,
        children: [
            { index:true, element: <AdminIndexPage /> }
        ]

    }
])

function AppRouter() {
    return (
        <RouterProvider router={router} />
    )
}

export default AppRouter