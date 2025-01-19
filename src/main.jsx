import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from './pages/home.jsx'
import './index.css'
import LoginPage from './pages/login-page.jsx';
import SignupPage from './pages/signup-page.jsx';
import HairCheckout from './pages/services.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />

      },
      {
        path: '/loginpage',
        element: <LoginPage />
      },
      {
        path: '/signup-page',
        element: <SignupPage />
      },
      {
        path: '/services',
        element: <HairCheckout />
      },

    ]
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>,
)
