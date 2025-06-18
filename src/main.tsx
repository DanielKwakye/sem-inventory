import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AppRouter from "@/routes.tsx";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <QueryClientProvider client={new QueryClient()} >
          <AppRouter />
      </QueryClientProvider>
  </StrictMode>,
)
