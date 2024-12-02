import express from "express";
import controller from "../controllers/usuario.js";

const router = express.Router();

router.get("/", controller.findAll);         // Obtener todos los usuarios
router.get("/:id", controller.findOne);      // Obtener un usuario por ID
router.post("/", controller.create);         // Crear un nuevo usuario
router.put("/:id", controller.update);       // Actualizar un usuario por ID
router.delete("/:id", controller.remove);    // Eliminar un usuario por ID

export default router;
