import { useEffect, useState } from 'react'
const Ordenes = () => {

    const [ordenes, setOrdenes] = useState([])

    const fetchOrdenes = async () => {
        const response = await fetch('http://localhost:3001/orden')
        const data = await response.json()
        setOrdenes(data)
    }

    const onLoad = async () => {
        fetchOrdenes();
    }

    useEffect(() => {
        onLoad();
    },[])

    return (
        <>
            <h1>Orders</h1>
            <hr></hr>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Total Items</th>
                        <th>Subtotal</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        ordenes.map((orden) => {
                            return <tr key={orden.id}>
                                        <td>{orden.id}</td>
                                        <td>{orden.items.length}</td>
                                        <td>{orden.subtotal}</td>
                                    </tr>
                        })
                    }
                </tbody>
            </table>

        </>
    )
}

export default Ordenes