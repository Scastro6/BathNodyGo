import { useEffect, useState } from "react";
import "./Nuevo.css";

const Nuevo = () => {
  const [productos, setProductos] = useState([]);
  const [mensaje, setMensaje] = useState("");

  // Función para obtener los productos desde el backend
  const fetchProductos = async () => {
    try {
      const response = await fetch("http://localhost:3001/api/productos");
      if (!response.ok) {
        throw new Error("Error al obtener los productos");
      }
      const data = await response.json();
      setProductos(data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // Función para agregar un producto al carrito
  const handleAddToCart = async (producto) => {
    console.log(producto)
    try {
      const response = await fetch("http://localhost:3001/api/carritos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          idProducto: producto.id,
          cantidad: 1,
        }),
      });
      if (!response.ok) {
        throw new Error("Error al agregar al carrito");
      }
      setMensaje(`Producto "${producto.nombre}" agregado al carrito.`);
    } catch (error) {
      console.error("Error:", error);
      setMensaje("Error al agregar el producto al carrito.");
    }
  };

  // Función para quitar un producto del carrito (opcional)
  const handleRemoveFromCart = async (producto) => {
    try {
      const response = await fetch(`http://localhost:3001/api/carritos/${producto.id}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("Error al quitar del carrito");
      }
      setMensaje(`Producto "${producto.nombre}" quitado del carrito.`);
    } catch (error) {
      console.error("Error:", error);
      setMensaje("Error al quitar el producto del carrito.");
    }
  };

  // Cargar los productos al montar el componente
  useEffect(() => {
    fetchProductos();
  }, []);

  return (
    <div className="productos-container">
      <h1>Productos Disponibles</h1>
      <h4>Lista de Productos:</h4>
      {mensaje && <p className="mensaje">{mensaje}</p>}
      <table className="productos-table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Stock</th>
            <th>Precio</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {productos.length > 0 ? (
            productos.map((producto) => (
              <tr key={producto.id}>
                <td>{producto.nombre}</td>
                <td>{producto.descripcion}</td>
                <td>{producto.stock}</td>
                <td>
                  {typeof producto.precio === "number"
                    ? producto.precio.toFixed(2)
                    : parseFloat(producto.precio).toFixed(2)}
                </td>
                <td>
                  <button onClick={() => handleAddToCart(producto)}>
                    Agregar al carrito
                  </button>
                  &nbsp;
                  <button onClick={() => handleRemoveFromCart(producto)}>
                    Quitar
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">No hay productos disponibles.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Nuevo;
