import { useEffect, useState } from 'react'
import CarritoDeCompras from './components/CarritoDeCompras/CarritoDeCompras.jsx'
import Ordenes from './components/Ordenes/Ordenes'
import Modal from './components/Modal/Modal'
import Header from './components/Header/Header.jsx'
import Aside from './components/Aside/Aside.jsx'

import './App.css'

function App() {
  const [productos, setProductos] = useState([])
  const [showCart, setShowCart] = useState(false)
  const [showOrdenes, setShowOrdenes] = useState(false)

  const fetchProductos = async () => {
    const response = await fetch('http://localhost:3001/producto')
    const data = await response.json()
    setProductos(data)
  }

  const handleAddToCart = async (producto) => {
    await fetch('http://localhost:3001/carrito/item', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(producto)
    })
    alert('Item added to cart!')
  }

  const handelOnLoad = async () => {
    fetchProductos();
  }

  useEffect(() => {
    handelOnLoad();
  }, [])

  return (
      <section className="sectionMain">
        <Aside />
      </section>
  )
}

export default App