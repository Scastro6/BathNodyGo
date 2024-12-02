import express from "express";
import controller from "../controllers/carrito.js";

const router = express.Router();

router.get("/", controller.findAll);         // Obtener todos los carritos
router.get("/:id", controller.findOne);      // Obtener un carrito por ID
router.post("/", controller.create);         // Crear un nuevo carrito
router.put("/:id", controller.update);       // Actualizar un carrito por ID
router.delete("/:id", controller.remove);    // Eliminar un carrito por ID

export default router;
