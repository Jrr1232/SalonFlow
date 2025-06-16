import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { register } from '../serviceWorkerRegistration.js';

// Register service worker
register(); // Enable PWA

// Lazy load route components
const App = lazy(() => import('./App.jsx'));
const Home = lazy(() => import('./pages/home.jsx'));
const LoginPage = lazy(() => import('./pages/login-page.jsx'));
const HairSignupPage = lazy(() => import('./pages/hair-signup-page.jsx'));
const WigSignupPage = lazy(() => import('./pages/wig-signup-page.jsx'));
const HairCheckout = lazy(() => import('./pages/services.jsx'));
const Calendar = lazy(() => import('./pages/calendar.jsx'));

// Error component to handle unexpected errors
const Error = () => <div>Error loading the page!</div>;

// Create Router with lazy-loaded components
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

// Render the app with a Suspense fallback
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Suspense fallback={<div>Loading...</div>}>
      <RouterProvider router={router} />
    </Suspense>
  </React.StrictMode>
);
