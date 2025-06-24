import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AppRouter from "@/routes.tsx";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {Provider} from "react-redux";
import store from "@/store";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <Provider store={store} >
          <QueryClientProvider client={new QueryClient()} >
              <AppRouter />
          </QueryClientProvider>
      </Provider>

  </StrictMode>,
)
