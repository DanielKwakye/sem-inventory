import { createRoot } from 'react-dom/client'
import './index.css'
import AppRouter from "@/routes.tsx";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {Provider} from "react-redux";
import store from "@/store";
import {Toaster} from "@/components/ui/sonner.tsx";

createRoot(document.getElementById('root')!).render(
    <Provider store={store} >
        <QueryClientProvider client={new QueryClient()} >
            <AppRouter />
            <Toaster />
        </QueryClientProvider>
    </Provider>,
)
