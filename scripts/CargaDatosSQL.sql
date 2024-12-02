-- Insertar datos en la tabla Producto con IDs iniciales
INSERT INTO Producto (id, nombre, descripcion, stock, precio) VALUES
(1, 'Vela Aromática de Lavanda', 'Vela artesanal con aroma relajante de lavanda.', 120, 85.50),
(2, 'Loción Corporal de Vainilla', 'Loción hidratante con esencia dulce de vainilla.', 150, 55.99),
(3, 'Gel de Baño de Menta', 'Gel refrescante con extracto de menta natural.', 200, 40.00),
(4, 'Perfume Floral de Primavera', 'Perfume floral con notas de rosa y jazmín.', 80, 125.00),
(5, 'Vela Aromática de Cereza', 'Vela con aroma frutal y dulce de cereza.', 60, 90.00),
(6, 'Crema Hidratante de Coco', 'Crema corporal ultra hidratante con aroma tropical.', 70, 75.00),
(7, 'Exfoliante Corporal de Azúcar', 'Exfoliante natural para eliminar impurezas.', 50, 65.00),
(8, 'Shampoo Revitalizante de Coco', 'Shampoo hidratante con aceite de coco.', 100, 45.00),
(9, 'Set de Regalo: Loción y Vela', 'Set perfecto para regalo con vela y loción.', 30, 150.00),
(10, 'Gel Antibacterial de Limón', 'Gel antibacterial con aroma fresco de limón.', 300, 20.00);

-- Generar 70 productos adicionales dinámicamente con IDs
DO $$
DECLARE
    i INT;
BEGIN
    FOR i IN 11..80 LOOP
        INSERT INTO Producto (id, nombre, descripcion, stock, precio)
        VALUES (
            i,
            CONCAT('Producto ', i),
            'Descripción genérica del producto.',
            (i % 100) + 20,
            ((i % 80) + 25) * 1.5
        );
    END LOOP;
END $$;

-- Insertar datos en la tabla Usuario con IDs iniciales
INSERT INTO Usuario (id, nombreDeUsuario, password, nombre, apellido, direccion, ciudad, telefono) VALUES
(1, 'mariafloral', 'maria123', 'María', 'Floral', 'Av. Flores 123', 'Lima', '987654321'),
(2, 'juancitric', 'juan456', 'Juan', 'Cítrico', 'Calle Dulce 456', 'Arequipa', '976543210');

-- Generar 298 usuarios adicionales dinámicamente con IDs
DO $$
DECLARE
    i INT;
BEGIN
    FOR i IN 3..300 LOOP
        INSERT INTO Usuario (id, nombreDeUsuario, password, nombre, apellido, direccion, ciudad, telefono)
        VALUES (
            i,
            CONCAT('usuario', i),
            'password' || i,
            CONCAT('Nombre', i),
            CONCAT('Apellido', i),
            CONCAT('Direccion ', i),
            CASE WHEN i % 4 = 0 THEN 'Lima'
                 WHEN i % 4 = 1 THEN 'Arequipa'
                 WHEN i % 4 = 2 THEN 'Cusco'
                 ELSE 'Trujillo'
            END,
            CONCAT('987654', LPAD(i::TEXT, 3, '0'))
        );
    END LOOP;
END $$;

-- Insertar carritos de compra con IDs iniciales
DO $$
DECLARE
    i INT;
BEGIN
    FOR i IN 1..300 LOOP
        INSERT INTO CarritoDeCompra (id, idUsuario) VALUES (i, i);
    END LOOP;
END $$;

-- Insertar ítems en los carritos de compra con IDs iniciales
DO $$
DECLARE
    i INT;
BEGIN
    FOR i IN 1..1000 LOOP
        INSERT INTO ItemDeCarrito (id, idCarrito, idProducto, cantidad)
        VALUES (
            i,
            ((i % 300) + 1), -- ID del carrito
            ((i % 80) + 1),  -- ID del producto
            ((i % 5) + 1)    -- Cantidad de producto
        );
    END LOOP;
END $$;


-- Insertar órdenes con IDs iniciales
DO $$
DECLARE
    i INT;
BEGIN
    FOR i IN 1..500 LOOP
        INSERT INTO Orden (id, idUsuario, total, subtotal, metodoDeEntrega, nroTarjeta, tipoTarjeta)
        VALUES (
            i,
            ((i % 300) + 1), -- ID del usuario
            ((i % 100) + 50) * 1.2, -- Total
            ((i % 100) + 40) * 1.1, -- Subtotal
            CASE WHEN i % 2 = 0 THEN 'Envío Express' ELSE 'Envío Estándar' END, -- Método de entrega
            CONCAT('12345678', LPAD(i::TEXT, 8, '0')), -- Número de tarjeta
            CASE WHEN i % 3 = 0 THEN 'Visa'
                 WHEN i % 3 = 1 THEN 'MasterCard'
                 ELSE 'American Express'
            END -- Tipo de tarjeta
        );
    END LOOP;
END $$;

-- Insertar ítems en las órdenes con IDs iniciales
DO $$
DECLARE
    i INT;
BEGIN
    FOR i IN 1..1500 LOOP
        INSERT INTO ItemDeLaOrden (id, idOrden, idProducto)
        VALUES (
            i,
            ((i % 500) + 1), -- ID de la orden
            ((i % 80) + 1)   -- ID del producto
        );
    END LOOP;
END $$;
