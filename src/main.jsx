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
import SingleChefCard from './components/SingleChefCard/SingleChefCard.jsx';
import Recipes from './components/Recipes/Recipes.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path:"/",
        element:<Home></Home>,
        loader: ()=>fetch('http://localhost:3000/chefs')
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
        element: <Recipes></Recipes>,
        loader:({params})=>fetch(`http://localhost:3000/chefs/${params.chefID}`)
      }
    ]
  },
  // {
  //   path:"/chef/:chefID",
  //   element: <Recipes></Recipes>,
  //   loader:({params})=>fetch(`http://localhost:3000/chefs/${params.chefID}`)
  // }
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders>
    <RouterProvider router={router} />
    </AuthProviders>
  </React.StrictMode>,
)
