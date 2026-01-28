import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "@emotion/react";

import Components from "../pages/components";
import { theme } from "@/shared/theme";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <ThemeProvider theme={theme}>
            <Components />
        </ThemeProvider>
    </StrictMode>
);