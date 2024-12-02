import express from "express";
import controller from "../controllers/producto.js";

const router = express.Router();

router.get("/", controller.findAll);         // Obtener todos los productos
router.get("/:id", controller.findOne);     // Obtener un producto por ID
router.post("/", controller.create);        // Crear un nuevo producto
router.put("/:id", controller.update);      // Actualizar un producto por ID
router.delete("/:id", controller.remove);   // Eliminar un producto por ID

export default router;
