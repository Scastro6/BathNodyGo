import Producto from "../models/producto.js";

const findAll = async () => {
  return await Producto.findAll();
};

const findOne = async (id) => {
  return await Producto.findByPk(id);
};

const create = async (data) => {
  return await Producto.create(data);
};

const update = async (id, data) => {
  const producto = await Producto.findByPk(id);
  if (!producto) return null;
  return await producto.update(data);
};

const remove = async (id) => {
  const producto = await Producto.findByPk(id);
  if (!producto) return null;
  await producto.destroy();
  return { message: "Producto eliminado exitosamente" };
};

const repository = { findAll, findOne, create, update, remove };

export default repository;
