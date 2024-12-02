import express from "express";
import controller from "../controllers/orden.js";

const router = express.Router();

router.get("/", controller.findAll);         // Obtener todas las órdenes
router.get("/:id", controller.findOne);      // Obtener una orden por ID
router.post("/", controller.create);         // Crear una nueva orden
router.put("/:id", controller.update);       // Actualizar una orden por ID
router.delete("/:id", controller.remove);    // Eliminar una orden por ID

export default router;
