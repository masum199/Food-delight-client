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

const router = createBrowserRouter([
  {
    path:'/',
    element:<Main></Main>,
    children:[
      {
        path:'/',
        element:<LandingPage></LandingPage>
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
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(




  <React.StrictMode>
    <RouterProvider router={router}>
    <App/>
    </RouterProvider>
  </React.StrictMode>
)
