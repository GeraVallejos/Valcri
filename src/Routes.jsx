import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import HomePage from "./pages/HomePage";
import PoliticaPrivacidad from "./components/PoliticaPrivacidad";
import TerminosPage from "./pages/TerminosPage";


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
                element: <PoliticaPrivacidad />,
            },
            {
                path: "terminos",
                element: <TerminosPage />,
            },
            ]
    }
])