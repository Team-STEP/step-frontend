import { createBrowserRouter } from "react-router-dom";
import Components from "@/pages/components";
import AdminHome from "@/pages/admin_home";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <AdminHome />,
    },
    {
        path: "/components",
        element: <Components />,
    },
]);
