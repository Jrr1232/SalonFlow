import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from './pages/home.jsx'
import './index.css'
import LoginPage from './pages/login-page.jsx';
import WigSignupPage from './pages/wig-signup-page.jsx';
import HairSignupPage from './pages/hair-signup-page.jsx';
import HairCheckout from './pages/services.jsx';
import Calendar from './pages/calendar.jsx';

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
        path: '/wig-signup-page',
        element: <WigSignupPage />
      },
      {
        path: '/hair-signup-page',
        element: <HairSignupPage />
      },
      {
        path: '/services',
        element: <HairCheckout />
      },
      {
        path: '/calendar',
        element: <Calendar />
      }


    ],
    future: {
      v7_startTransition: true,
    },
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider future={{
      v7_startTransition: true,
      v7_relativeSplatPath: true,
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_skipActionErrorRevalidation: true,
    }} router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>,
)
