import express from "express";
import controller from "../controllers/ItemDeLaOrden.js";

const router = express.Router();

router.get("/", controller.findAll);         // Obtener todos los ítems de la orden
router.get("/:id", controller.findOne);      // Obtener un ítem de la orden por ID
router.post("/", controller.create);         // Crear un nuevo ítem de la orden
router.put("/:id", controller.update);       // Actualizar un ítem de la orden por ID
router.delete("/:id", controller.remove);    // Eliminar un ítem de la orden por ID

export default router;
