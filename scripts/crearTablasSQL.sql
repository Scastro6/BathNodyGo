-- Crear la tabla Producto
CREATE TABLE IF NOT EXISTS Producto (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(150) NOT NULL,
    descripcion TEXT,
    stock INT NOT NULL,
    precio DECIMAL(10, 2) NOT NULL
);

-- Crear la tabla Usuario
CREATE TABLE IF NOT EXISTS Usuario (
    id SERIAL PRIMARY KEY,
    nombreDeUsuario VARCHAR(80) NOT NULL UNIQUE,
    password VARCHAR(100) NOT NULL,
    nombre VARCHAR(100) NOT NULL,
    apellido VARCHAR(100) NOT NULL,
    direccion VARCHAR(200),
    ciudad VARCHAR(100),
    telefono VARCHAR(20)
);

-- Crear la tabla CarritoDeCompra
CREATE TABLE IF NOT EXISTS CarritoDeCompra (
    id SERIAL PRIMARY KEY,
    idUsuario INT NOT NULL,
    FOREIGN KEY (idUsuario) REFERENCES Usuario(id)
);

-- Crear la tabla ItemDeCarrito
CREATE TABLE IF NOT EXISTS ItemDeCarrito (
    id SERIAL PRIMARY KEY,
    idCarrito INT NOT NULL,
    idProducto INT NOT NULL,
    FOREIGN KEY (idCarrito) REFERENCES CarritoDeCompra(id),
    FOREIGN KEY (idProducto) REFERENCES Producto(id)
);

-- Crear la tabla Orden
CREATE TABLE IF NOT EXISTS Orden (
    id SERIAL PRIMARY KEY,
    idUsuario INT NOT NULL,
    fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    total DECIMAL(10, 2) NOT NULL,
    subtotal DECIMAL(10, 2) NOT NULL,
    metodoDeEntrega VARCHAR(50),
    nroTarjeta VARCHAR(20),
    tipoTarjeta VARCHAR(50),
    FOREIGN KEY (idUsuario) REFERENCES Usuario(id)
);

-- Crear la tabla ItemDeLaOrden
CREATE TABLE IF NOT EXISTS ItemDeLaOrden (
    id SERIAL PRIMARY KEY,
    idOrden INT NOT NULL,
    idProducto INT NOT NULL,
    FOREIGN KEY (idOrden) REFERENCES Orden(id),
    FOREIGN KEY (idProducto) REFERENCES Producto(id)
);
