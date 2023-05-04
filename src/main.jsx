import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-tooltip/dist/react-tooltip.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './layout/Main.jsx';
import Home from './components/Home/Home.jsx';
import Login from './components/Login/Login.jsx';
import Register from './components/Register/Register.jsx';
import Blog from './components/Blog/Blog.jsx';
import AuthProviders from './providers/AuthProviders.jsx';
import PrivateRoute from './components/routes/PrivateRoute.jsx';
import ChefRecipes from './components/ChefRecipes/ChefRecipes.jsx';
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:"/",
        element:<Home></Home>,
        loader: ()=>fetch('https://cook-like-a-chef-server-shuvrodev337.vercel.app/chefs')
      },
      {
        path:"/blog",
        element:<Blog></Blog>
      },
      {
        path:"/login",
        element:<Login></Login>
      },
      {
        path:"/register",
        element:<Register></Register>
      },
      {
        path:"/chef/:chefID",
        element: <PrivateRoute><ChefRecipes></ChefRecipes></PrivateRoute>,
        loader:({params})=>fetch(`https://cook-like-a-chef-server-shuvrodev337.vercel.app/chefs/${params.chefID}`)
      }
    ]
  },

]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders>
    <RouterProvider router={router} />
    </AuthProviders>
  </React.StrictMode>,
)
