import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import HomePage from "./pages/HomePage";


export const getRoutes = () => createBrowserRouter([
    {
        element: <AppLayout />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            ]
    }
])