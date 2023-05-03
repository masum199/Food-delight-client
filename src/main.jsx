import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Main from './components/Home/Main.jsx';
import LandingPage from './components/LandingPage/LandingPage.jsx';
import Blog from './components/Blog/Blog.jsx';
import Login from './components/User/Login/Login';
import Register from './components/User/Register/Register';
import App from './App';
import AuthProvider from './components/AuthProvider/AuthProvider';
import ErrorPage from './components/ErrorPage/ErrorPage';
import ChiefDetails from './components/ChiefDetails/ChiefDetails';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

const router = createBrowserRouter([
  {
    path:'/',
    element:<Main></Main>,
    children:[
      {
        path:'/',
        element:<LandingPage></LandingPage>,
        loader:()=>fetch('/data.json')
      },
      {
        path:'/cheifdetails/:id',
        element:<PrivateRoute><ChiefDetails></ChiefDetails>,</PrivateRoute>,
        loader: ({ params }) => fetch('/data.json')
      },
      {
        path:'/blog',
        element:<Blog></Blog>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      }, 
    ]
  },
  
    {
      path:'/*',
      element:<ErrorPage></ErrorPage>

    }
  
])
ReactDOM.createRoot(document.getElementById('root')).render(




  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router}/>
    </AuthProvider>
    
   
  </React.StrictMode>
)
