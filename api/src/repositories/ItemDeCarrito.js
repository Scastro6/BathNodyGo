import model from "../models/carrito.js";
import RepositoryBase from "../repositories/base.js";

const repository = new RepositoryBase(model);

const findAll = async (req, res) => {
  try {
    const result = await repository.findAll();
    return sendResult(result, res);
  } catch (error) {
    console.error("Error en findAll:", error);
    res.status(500).json({ message: "Error al obtener los datos." });
  }
};

const create = async (req, res) => {
  try {
    const payload = req.body;
    const result = await repository.create(payload);
    return sendResult(result, res);
  } catch (error) {
    console.error("Error en create:", error);
    res.status(500).json({ message: "Error al crear el recurso." });
  }
};

const findOne = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await repository.findOne(id);
    return sendResult(result, res);
  } catch (error) {
    console.error("Error en findOne:", error);
    res.status(500).json({ message: "Error al buscar el recurso." });
  }
};

const remove = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await repository.remove(id);
    return sendResult(result, res);
  } catch (error) {
    console.error("Error en remove:", error);
    res.status(500).json({ message: "Error al eliminar el recurso." });
  }
};

const update = async (req, res) => {
  try {
    const payload = req.body;
    const result = await repository.update(payload);
    return sendResult(result, res);
  } catch (error) {
    console.error("Error en update:", error);
    res.status(500).json({ message: "Error al actualizar el recurso." });
  }
};

const sendResult = (result, res) => {
  if (result && (Array.isArray(result) ? result.length > 0 : true)) {
    return res.status(200).json(result);
  } else {
    return res.status(404).json({ message: "Recurso no encontrado." });
  }
};

const controller = { findAll, create, findOne, remove, update };

export default controller;
