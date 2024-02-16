import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './style.css'
import Travaux from './components/Travaux.jsx'
import Contact from './components/contact.jsx'
import Liens from './components/Liens.jsx'
import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "travaux",
    element: <Travaux />,
  },
  {
    path: "contact",
    element: <Contact />,
  },
  {
    path: "liens",
    element: <Liens />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
