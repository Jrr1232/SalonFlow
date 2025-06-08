// main.jsx

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import Home from './pages/home.jsx';
import './index.css';
import LoginPage from './pages/login-page.jsx';
import HairSignupPage from './pages/hair-signup-page.jsx';
import WigSignupPage from './pages/wig-signup-page.jsx';
import HairCheckout from './pages/services.jsx';
import Calendar from './pages/calendar.jsx';
import { register } from '../serviceWorkerRegistration.js';
// Register service worker
register();  // Call the register function to enable PWA

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> },
      { path: '/login', element: <LoginPage /> },
      { path: '/services/hair', element: <HairCheckout /> },
      { path: '/calendar', element: <Calendar /> },
      { path: '/signup/hair', element: <HairSignupPage /> },
      { path: '/signup/wig', element: <WigSignupPage /> },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);
