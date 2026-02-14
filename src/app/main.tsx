import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "@emotion/react";
import { RouterProvider } from "react-router-dom";

import { router } from "./router.tsx";
import { theme } from "@/shared/styles/theme.ts";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <ThemeProvider theme={theme}>
            <RouterProvider router={router} />
        </ThemeProvider>
    </StrictMode>
);