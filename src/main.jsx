import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { ClipLoader } from 'react-spinners';
import About from './pages/about.jsx';

// Register service worker

// Lazy load route components
const App = lazy(() => import('./App.jsx'));
const Home = lazy(() => import('./pages/home.jsx'));
const LoginPage = lazy(() => import('./pages/login-page.jsx'));
const HairSignupPage = lazy(() => import('./pages/hair-signup-page.jsx'));
const WigSignupPage = lazy(() => import('./pages/wig-signup-page.jsx'));
const HairCheckout = lazy(() => import('./pages/services.jsx'));
const Calendar = lazy(() => import('./pages/calendar.jsx'));
const Services = lazy(() => import('./pages/services.jsx'));
const AboutPage = lazy(() => import('./pages/about.jsx'));
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
      { path: '/services', element: <Services /> },
      { path: '/about', element: <AboutPage /> },
      { path: '/calendar', element: <Calendar /> },
      { path: '/signup/hair', element: <HairSignupPage /> },
      { path: '/signup/wig', element: <WigSignupPage /> },
    ]
  },
]);

// Render the app with a Suspense fallback
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Suspense fallback={<ClipLoader color="#3498db" size={40} />}>
      <RouterProvider router={router} />
    </Suspense>
  </React.StrictMode>
);
