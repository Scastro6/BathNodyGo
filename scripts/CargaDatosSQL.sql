-- Insertar datos en la tabla Producto
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
(10, 'Gel Antibacterial de Limón', 'Gel antibacterial con aroma fresco de limón.', 300, 20.00),
(11, 'Difusor de Aromas de Canela', 'Difusor de aromas con esencia cálida de canela.', 90, 110.00),
(12, 'Crema Corporal de Almendra', 'Crema hidratante con extracto de almendra dulce.', 120, 85.00),
(13, 'Perfume de Invierno', 'Fragancia especial con notas de pino y especias.', 60, 135.00),
(14, 'Jabón Líquido de Mango', 'Jabón líquido con aroma tropical de mango fresco.', 150, 25.50),
(15, 'Vela Aromática de Manzana', 'Vela con aroma acogedor de manzana y canela.', 70, 95.00),
(16, 'Jabón Espumoso de Frutas', 'Jabón espumoso con un refrescante aroma a frutas tropicales.', 90, 32.50),
(17, 'Aromatizador para el Hogar', 'Aromatizador con fragancia de madera y especias.', 70, 45.00),
(18, 'Loción Hidratante de Mango', 'Loción corporal con esencia de mango fresco.', 120, 50.00),
(19, 'Vela Aromática de Rosas', 'Vela artesanal con aroma floral de rosas.', 60, 100.00),
(20, 'Exfoliante Corporal de Café', 'Exfoliante natural con granos de café.', 50, 80.00),
(21, 'Set de Regalo: Perfume y Crema', 'Set con perfume y crema hidratante.', 30, 200.00),
(22, 'Perfume Cítrico de Verano', 'Perfume con notas frescas de limón y naranja.', 40, 120.00),
(23, 'Shampoo de Argan', 'Shampoo hidratante con aceite de argán.', 100, 55.00),
(24, 'Difusor de Aromas de Vainilla', 'Difusor de aromas con esencia dulce de vainilla.', 80, 105.00),
(25, 'Crema Corporal de Aloe Vera', 'Crema corporal con extracto de aloe vera.', 70, 60.00),
(26, 'Jabón Líquido de Fresa', 'Jabón líquido con un aroma dulce y frutal.', 120, 35.50),
(27, 'Loción Refrescante de Sandía', 'Loción con esencia de sandía tropical.', 90, 55.00),
(28, 'Perfume Floral de Invierno', 'Perfume con notas de pino y jazmín.', 50, 140.00),
(29, 'Vela Aromática de Madera', 'Vela con un cálido aroma a madera de cedro.', 60, 110.00),
(30, 'Crema Hidratante de Karité', 'Crema corporal enriquecida con manteca de karité.', 80, 85.00);
-- Insertar datos en la tabla Usuario
INSERT INTO Usuario (id, nombreDeUsuario, password, nombre, apellido, direccion, ciudad, telefono) VALUES
(1, 'mariafloral', 'maria123', 'María', 'Floral', 'Av. Flores 123', 'Lima', '987654321'),
(2, 'juancitric', 'juan456', 'Juan', 'Cítrico', 'Calle Dulce 456', 'Arequipa', '976543210'),
(3, 'carlafrutal', 'carla789', 'Carla', 'Frutal', 'Pasaje Tropical 789', 'Cusco', '986543219'),
(4, 'robertopino', 'roberto123', 'Roberto', 'Pino', 'Av. Invierno 321', 'Trujillo', '985432109'),
(5, 'sofialuz', 'sofia456', 'Sofía', 'Luz', 'Calle Sol 654', 'Arequipa', '984321098'),
(6, 'andrealavanda', 'andrea123', 'Andrea', 'Lavanda', 'Calle Jazmín 112', 'Cusco', '976543210'),
(7, 'carlosroble', 'carlos123', 'Carlos', 'Roble', 'Av. Pinos 314', 'Lima', '974532189'),
(8, 'danielapino', 'daniela456', 'Daniela', 'Pino', 'Pasaje Invierno 654', 'Arequipa', '986532741'),
(9, 'gabrielmango', 'gabriel789', 'Gabriel', 'Mango', 'Calle Tropical 321', 'Trujillo', '987654123'),
(10, 'lauralimon', 'laura321', 'Laura', 'Limón', 'Av. Frutas 456', 'Lima', '975432189'),
(11, 'javiermenta', 'javier123', 'Javier', 'Menta', 'Calle Refresco 789', 'Arequipa', '964321987'),
(12, 'claudiasol', 'claudia456', 'Claudia', 'Sol', 'Pasaje Luz 987', 'Cusco', '963254789'),
(13, 'marcopino', 'marco789', 'Marco', 'Pino', 'Av. Cedro 321', 'Trujillo', '962547123'),
(14, 'elisaflor', 'elisa123', 'Elisa', 'Flor', 'Calle Primavera 213', 'Lima', '961235479'),
(15, 'pedrorosa', 'pedro456', 'Pedro', 'Rosa', 'Pasaje Invierno 987', 'Arequipa', '953214789');
-- Insertar datos en la tabla CarritoDeCompra
INSERT INTO CarritoDeCompra (id, idUsuario) VALUES
(1, 1),
(2, 2),
(3, 3),
(4, 4),
(5, 5),
(6, 6),
(7, 7),
(8, 8),
(9, 9),
(10, 10),
(11, 11),
(12, 12),
(13, 13),
(14, 14),
(15, 15);

INSERT INTO ItemDeCarrito (id, idCarrito, idProducto) VALUES
(1, 1, 1), -- Usuario 1, Producto 1
(2, 1, 4), -- Usuario 1, Producto 4
(3, 2, 2), -- Usuario 2, Producto 2
(4, 2, 5), -- Usuario 2, Producto 5
(5, 3, 3), -- Usuario 3, Producto 3
(6, 4, 6), -- Usuario 4, Producto 6
(7, 4, 7), -- Usuario 4, Producto 7
(8, 5, 8), -- Usuario 5, Producto 8
(9, 5, 9), -- Usuario 5, Producto 9
(10, 6, 16),
(11, 6, 17),
(12, 7, 18),
(13, 7, 19),
(14, 8, 20),
(15, 9, 21),
(16, 9, 22),
(17, 10, 23),
(18, 10, 24),
(19, 11, 25),
(20, 11, 26);
-- Insertar datos en la tabla Orden
INSERT INTO Orden (id, idUsuario, total, subtotal, metodoDeEntrega, nroTarjeta, tipoTarjeta) VALUES
(1, 1, 245.00, 200.00, 'Envío Express', '1234567812345678', 'Visa'),
(2, 2, 150.50, 130.00, 'Envío Estándar', '2345678923456789', 'MasterCard'),
(3, 3, 180.75, 150.00, 'Envío Express', '3456789034567890', 'American Express'),
(4, 4, 220.25, 180.00, 'Envío Estándar', '4567890145678901', 'Visa'),
(5, 5, 310.50, 260.00, 'Envío Express', '5678901256789012', 'MasterCard'),
(6, 6, 150.00, 120.00, 'Envío Express', '1234567890123456', 'Visa'),
(7, 7, 175.00, 140.00, 'Envío Estándar', '2345678901234567', 'MasterCard'),
(8, 8, 200.00, 160.00, 'Envío Express', '3456789012345678', 'American Express'),
(9, 9, 220.00, 180.00, 'Envío Estándar', '4567890123456789', 'Visa'),
(10, 10, 250.00, 200.00, 'Envío Express', '5678901234567890', 'MasterCard');

-- Insertar datos en la tabla ItemDeLaOrden
INSERT INTO ItemDeLaOrden (id, idOrden, idProducto) VALUES
(1, 1, 1),
(2, 1, 4),
(3, 2, 2),
(4, 2, 5),
(5, 3, 3),
(6, 4, 6),
(7, 4, 7),
(8, 5, 8),
(9, 5, 9),
(10, 6, 16),
(11, 6, 17),
(12, 7, 18),
(13, 7, 19),
(14, 8, 20),
(15, 8, 21),
(16, 9, 22),
(17, 9, 23),
(18, 10, 24),
(19, 10, 25);
