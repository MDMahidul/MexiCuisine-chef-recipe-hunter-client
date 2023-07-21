import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../layouts/Main';
import Blog from '../pages/Blog/Blog';
import Chefs from '../pages/Chefs/Chefs';

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
            }
        ]
    }
])

export default router;