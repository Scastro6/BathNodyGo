import { useEffect, useState } from "react"

const CarritoDeCompras = () => {

    const [itemsCarrito, setItemsCarrito] = useState([])
    const [subtotal, setSubtotal] = useState(0)

    const fetchItemsCarrito = async () => {
        const response = await fetch('http://localhost:3001/carrito')
        const data = await response.json()
        setItemsCarrito(data.items)
    }

    const removeItem = async (id) => {
        await fetch(`http://localhost:3001/carrito/${id}`, {
            method: 'DELETE'
        })
        alert('Item eliminado del carrito!')
        fetchItemsCarrito();
    }

    const handleCheckout = async () => {
        await fetch('http://localhost:3001/orden', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
              },
            body: JSON.stringify({ items: itemsCarrito, subtotal: subtotal}),
        })
        await fetch('http://localhost:3001/carrito', {
            method: 'DELETE'
        })
        alert('Gracias por su compra!')
        fetchItemsCarrito();
    }
    
    const onLoad = async () => {
        fetchItemsCarrito();
    }

    useEffect(() => {
        onLoad();
    },[])

    useEffect(() => {
        let total = 0;
        itemsCarrito.forEach((item) => {
            total += item.precio;
        })
        setSubtotal(total);
    },[itemsCarrito])

    return (
        <>
            <h1>Cart</h1>
            <h3>Items:</h3>
            {itemsCarrito?.map((item) => {
                return <div key={item.id}>
                            <span>🎵 {item.nombre} - {item.descripcion} - ${item.precio} <button onClick={() => removeItem(item.id) }>x</button>
                            </span>
                </div>
            })}
            <hr></hr>
            <h4>Subtotal: $ {subtotal}</h4>
            <button onClick={() => handleCheckout()}>Checkout</button>

        </>
    )
}

export default CarritoDeCompras