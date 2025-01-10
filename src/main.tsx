import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import ThemeProvider from "./context/dark-mode/theme-provider.tsx";
import { BrowserRouter } from "react-router-dom";
import { SidebarInset, SidebarProvider } from "./components/ui/sidebar.tsx";
import { AppSidebar } from "./components/layout/App-sidebar.tsx";
import { ModalProvider } from "./components/ui/animated-modal.tsx";
import { Toaster } from "./components/ui/toaster.tsx";


createRoot(document.getElementById("root")!).render(
  <StrictMode>
      <BrowserRouter>
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <ModalProvider>
            <SidebarProvider defaultOpen={false}>
              <AppSidebar/>
              <SidebarInset>
                <App />
                <Toaster/>
              </SidebarInset>
            </SidebarProvider>
          </ModalProvider>
        </ThemeProvider>
      </BrowserRouter>
  </StrictMode>
);
