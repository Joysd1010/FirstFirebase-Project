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
  
  ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
