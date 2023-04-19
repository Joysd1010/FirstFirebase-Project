import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css'
import Main from './Layout/Main';
import Homepage from './Components/Homepage/Homepage';
import Login from './Components/LogIn/Login';
import LoginEmail from './Components/LoginEmail/LoginEmail';
import Register from './Register/Register';
import RegisterRBS from './Components/RegisterRBS/RegisterRBS';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    children:[{
      path:'/',
      element:<Homepage/>
    },
    {
      path:'/login',
      element: <Login/>
    }
    ,
    {
      path:'/loginEmail',
      element: <LoginEmail/>
      
    },{
      path:'/register',
      element:<Register/>
    }
    ,{
      path:'/loginRbs',
      element:<RegisterRBS/>
    }
  
  ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
