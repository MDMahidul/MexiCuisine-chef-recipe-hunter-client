import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../layouts/Main';
import Blog from '../pages/Blog/Blog';
import Chefs from '../pages/Chefs/Chefs';
import Login from '../pages/Login/Login';
import Register from '../pages/Login/Register'
import Terms from '../pages/Terms/Terms';
import Error from '../pages/Error/Error';
import ChefDetails from '../pages/ChefDetails/ChefDetails';
import PrivateRoute from './PrivateRoute';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Chefs></Chefs>,
        loader: () =>
          fetch("https://chef-recipe-hunter-server-mdmahidul.vercel.app/chef"),
      },
      {
        path: "/chef/:id",
        element: (
          <PrivateRoute>
            <ChefDetails />
          </PrivateRoute>
        ),
        errorElement: <Error></Error>,
        loader: ({ params }) =>
          fetch(
            `https://chef-recipe-hunter-server-mdmahidul.vercel.app/chef/${params.id}`
          ),
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
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
        path: "/terms",
        element: <Terms></Terms>,
      },
    ],
  },
]);

export default router;