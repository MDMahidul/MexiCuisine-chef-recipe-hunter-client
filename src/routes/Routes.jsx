import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../layouts/Main';
import Blog from '../pages/Blog/Blog';
import Chefs from '../pages/Chefs/Chefs';
import Login from '../pages/Login/Login';
import Register from '../pages/Login/Register'
import Terms from '../pages/Terms/Terms';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children:[
            {
                path:'/',
                element:<Chefs></Chefs>
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            },
            {
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: "/register",
                element: <Register></Register>,
            },
            {
                path:'/terms',
                element: <Terms></Terms>
            }
        ]
    }
])

export default router;