import { useEffect, useState } from "react";

const CarritoDeCompras = () => {
  const [itemsCarrito, setItemsCarrito] = useState([]);
  const [subtotal, setSubtotal] = useState(0);

  // Fetch items del carrito
  const fetchItemsCarrito = async () => {
    try {
      const response = await fetch("http://localhost:3001/api/carritos");
      const data = await response.json();
      setItemsCarrito(data); // Establecer los datos obtenidos del backend
    } catch (error) {
      console.error("Error al obtener los items del carrito:", error);
    }
  };

  // Eliminar un item del carrito
  const removeItem = async (id) => {
    try {
      await fetch(`http://localhost:3001/api/carritos/${id}`, {
        method: "DELETE",
      });
      alert("Item eliminado del carrito!");
      fetchItemsCarrito();
    } catch (error) {
      console.error("Error al eliminar el item del carrito:", error);
    }
  };

  // Finalizar compra (checkout)
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
      fetchItemsCarrito();
    } catch (error) {
      console.error("Error al realizar el checkout:", error);
    }
  };

  // Cargar los datos al montar el componente
  useEffect(() => {
    fetchItemsCarrito();
  }, []);

  // Calcular el subtotal cuando cambien los items del carrito
  useEffect(() => {
    const total = itemsCarrito.reduce((sum, item) => sum + (item.precio || 0), 0);
    setSubtotal(total);
  }, [itemsCarrito]);

  return (
    <>
      <h1>Carrito de Compras</h1>
      <h3>Items:</h3>
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
        <p>No hay items en el carrito.</p>
      )}
      <hr />
      <h4>Subtotal: $ {subtotal.toFixed(2)}</h4>
      <button onClick={handleCheckout}>Finalizar Compra</button>
    </>
  );
};

export default CarritoDeCompras;
