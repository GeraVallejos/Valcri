import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import HomePage from "./pages/HomePage";
import TerminosPage from "./pages/TerminosPage";
import PrivacidadPage from "./pages/PrivacidadPage";


export const getRoutes = () => createBrowserRouter([
    {
        element: <AppLayout />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: "privacidad",
                element: <PrivacidadPage />,
            },
            {
                path: "terminos",
                element: <TerminosPage />,
            },
            ]
    }
])