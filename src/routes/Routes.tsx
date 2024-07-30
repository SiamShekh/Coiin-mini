import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import VaildDate from "../pages/Vailddate";
import MainLayout from "../components/layouts/MainLayout";
import More from "../pages/More";
import ImageGenaretors from "../pages/ImageGenaretors";
import RouteProtector from "../components/security/RouteProtector";

const Routes = createBrowserRouter([
    {
        path: "/",
        element: <Login />
    },
    {
        path: "/dashboard",
        element: <RouteProtector><MainLayout /></RouteProtector>,
        children: [
            {
                index: true,
                element: <VaildDate />
            },
            {
                path: 'vaildate',
                element: <VaildDate />
            },
            {
                path: 'more',
                element: <More />
            },
            {
                path: 'image',
                element: <ImageGenaretors />
            }
        ]
    }
]);

export default Routes;