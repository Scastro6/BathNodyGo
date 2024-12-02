import { useEffect, useState } from "react";

const CarritoDeCompras = () => {
  const [itemsCarrito, setItemsCarrito] = useState([]);
  const [subtotal, setSubtotal] = useState(0);

  // Obtener los productos del carrito desde el backend
  const fetchItemsCarrito = async () => {
    try {
      const response = await fetch("http://localhost:3001/api/carritos");
      const data = await response.json();
      setItemsCarrito(data); // Actualizar el estado con los productos del carrito
    } catch (error) {
      console.error("Error al obtener los items del carrito:", error);
    }
  };

  // Eliminar un producto del carrito
  const removeItem = async (id) => {
    try {
      await fetch(`http://localhost:3001/api/carritos/${id}`, {
        method: "DELETE",
      });
      alert("Producto eliminado del carrito!");
      fetchItemsCarrito(); // Actualizar la lista de productos
    } catch (error) {
      console.error("Error al eliminar el producto del carrito:", error);
    }
  };

  // Finalizar compra
  const handleCheckout = async () => {
    try {
      await fetch("http://localhost:3001/api/ordenes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ items: itemsCarrito, subtotal }),
      });
      await fetch("http://localhost:3001/api/carritos", {
        method: "DELETE",
      });
      alert("Gracias por su compra!");
      fetchItemsCarrito(); // Vaciar el carrito
    } catch (error) {
      console.error("Error al realizar el checkout:", error);
    }
  };

  // Cargar los datos al montar el componente
  useEffect(() => {
    fetchItemsCarrito();
  }, []);

  // Calcular el subtotal cada vez que cambien los productos en el carrito
  useEffect(() => {
    const total = itemsCarrito.reduce((sum, item) => sum + (item.precio || 0), 0);
    setSubtotal(total);
  }, [itemsCarrito]);

  return (
    <div>
      <h1>Carrito de Compras</h1>
      <h3>Productos:</h3>
      {itemsCarrito.length > 0 ? (
        itemsCarrito.map((item) => (
          <div key={item.id}>
            <span>
              🎵 {item.nombre} - {item.descripcion} - ${item.precio?.toFixed(2)}
              <button onClick={() => removeItem(item.id)}>x</button>
            </span>
          </div>
        ))
      ) : (
        <p>No hay productos en el carrito.</p>
      )}
      <hr />
      <h4>Subtotal: $ {subtotal.toFixed(2)}</h4>
      <button onClick={handleCheckout}>Finalizar Compra</button>
    </div>
  );
};

export default CarritoDeCompras;
