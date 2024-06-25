import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import AuthProvider from './Context/AuthProvider.jsx'
import { RouterProvider } from 'react-router-dom'
import router from './Router/Routes/Routes.jsx'
import { Toaster } from 'react-hot-toast';

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
     <RouterProvider router={router}></RouterProvider>
     <Toaster />
  </AuthProvider>
    
)
