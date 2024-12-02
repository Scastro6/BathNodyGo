import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'


import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'

import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <main>
      <Header />
      <RouterProvider router={router}/>
      <Footer />
    </main>
  </StrictMode>,
)
