import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import Rooms from './components/Rooms';
import Devices from './components/Devices';
import Readings from './components/Readings';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Navigate to="/rooms" replace /> },
      { path: "/rooms", element: <Rooms /> },
      { path: "/devices", element: <Devices /> },
      { path: "/readings", element: <Readings /> },
    ]
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
