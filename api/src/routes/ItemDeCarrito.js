import express from "express";
import controller from "../controllers/ItemDeCarrito.js";

const router = express.Router();

router.get("/", controller.findAll);         // Obtener todos los ítems del carrito
router.get("/:id", controller.findOne);      // Obtener un ítem del carrito por ID
router.post("/", controller.create);         // Crear un nuevo ítem del carrito
router.put("/:id", controller.update);       // Actualizar un ítem del carrito por ID
router.delete("/:id", controller.remove);    // Eliminar un ítem del carrito por ID

export default router;
