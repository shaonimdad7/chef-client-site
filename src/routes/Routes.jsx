import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Blog from "../pages/BLog/Blog";
import Details from "../pages/Details/Details";
import SignUp from "../pages/Shared/SignUp/SignUp";
import Login from "../pages/Shared/Login/Login";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/home',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/categories')
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/details/:id',
                element: <Details></Details>,
                loader: () => fetch('http://localhost:5000/categories')
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            }
        ]
    }
])

export default router;