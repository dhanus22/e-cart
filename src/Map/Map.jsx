import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/navbar/Layout";
import Login from "../components/navbar/pages/Auth/Login";
import Register from "../components/navbar/pages/Auth/Register";
import Home from "../components/Homecomp/Home";
import Productdetails from "../components/Homecomp/Productdetails";
import Cart from "../components/cartcomp/Cart";
import Wishlist from "../components/Homecomp/wishlist/Wishlist";

export let Mymap = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/home",
                element: <Home />
            },
            {
                path : "/productDetails/:id",
                element : <Productdetails/>
            },
            {
                path : "/wishlist",
                element : <Wishlist/>
            },
            {
                path : "/cart",
                element : <Cart/>
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/register",
                element: <Register />
            }
        ]
    }
])
