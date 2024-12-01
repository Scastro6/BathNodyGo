import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import AboutMe from './routes/AboutMe/AboutMe.jsx'
import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'
import PostPage from './routes/Post/PostPage.jsx'
import NewPostPage from './routes/NewPost/NewPostPage.jsx'

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
    path: "/about",
    element: <AboutMe />  
  },
  {
    path: "/posts/:id",
    element: <PostPage />
  },
  {
    path: "/posts/new",
    element: <NewPostPage />
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
