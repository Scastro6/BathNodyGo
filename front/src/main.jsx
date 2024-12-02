import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'

import NuevoPage from './routes/NuevoPage.jsx'
import LoginPage from './routes/LoginPage.jsx'
import CarritoDeComprasPage from './routes/CarritoDeComprasPage.jsx'

import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'

import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/nuevo",
    element: <NuevoPage />
  },
  {
    path: "/login",
    element: <LoginPage />
  },
  {
    path: "/carrito",
    element: <CarritoDeComprasPage />
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
