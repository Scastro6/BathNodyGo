import { useEffect, useState } from 'react'
import CarritoDeCompras from '../CarritoDeCompras/CarritoDeCompras'
import Ordenes from '../Ordenes/Ordenes'
import Modal from '../Modal/Modal'

import './Nuevo.css'

const Nuevo = () => {

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
        <>
          <h1>PRODUCTOS</h1>
          <button onClick={() => setShowCart(!showCart)}>Go to Cart</button>
          &nbsp;<button onClick={() => setShowOrdenes(!showOrdenes)}>Go to Orders</button>
          <h4>Items for sale:</h4>
          <table>
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Descripcion</th>
                <th>Stock</th>
                <th>Precio</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {productos.map((producto) => (
                          <tr key={producto.id}>
                              <td>{producto.nombre}</td>
                              <td>{producto.descripcion}</td>
                              <td>{producto.stock}</td>
                              <td>{producto.precio}</td>
                              <td><button onClick={() => handleAddToCart(producto)}>Add to cart</button></td>
                          </tr>
                        ))}
                    </tbody>
            </table>
    
            {showCart && <Modal onClose={() => setShowCart(false)} Children={CarritoDeCompras}></Modal>}
            {showOrdenes && <Modal onClose={() => setShowOrdenes(false)} Children={Ordenes}></Modal>}
        </>
      )
}

export default Nuevo;