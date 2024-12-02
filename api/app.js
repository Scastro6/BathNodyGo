import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

// Importar routers para las entidades definidas
import ProductoRouter from "./src/routes/producto.js";
import UsuarioRouter from "./src/routes/usuario.js";
import CarritoRouter from "./src/routes/carrito.js";
import ItemDeCarritoRouter from "./src/routes/ItemDeCarrito.js";
import OrdenRouter from "./src/routes/orden.js";
import ItemDeLaOrdenRouter from "./src/routes/ItemDeLaOrden.js";

const app = express();

// Middlewares
app.use(bodyParser.json());
app.use(cors());

// Ruta base
app.get("/", (req, res) => {
  return res.json({ message: "API funcionando correctamente", code: "200" });
});

// Rutas para las entidades principales
app.use("/api/productos", ProductoRouter); // CRUD Productos
app.use("/api/usuarios", UsuarioRouter);   // CRUD Usuarios
app.use("/api/carritos", CarritoRouter);   // CRUD Carritos
app.use("/api/itemsDeCarrito", ItemDeCarritoRouter); // CRUD Ítems del carrito
app.use("/api/ordenes", OrdenRouter);      // CRUD Órdenes
app.use("/api/itemsDeLaOrden", ItemDeLaOrdenRouter); // CRUD Ítems de la orden

// Manejo de rutas no encontradas
app.use((req, res, next) => {
  res.status(404).json({ message: "Recurso no encontrado" });
});

// Manejo de errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Error en el servidor" });
});

export default app;
