import ItemDeLaOrden from "../models/ItemDeLaOrden.js";

const findAll = async () => {
  return await ItemDeLaOrden.findAll();
};

const findOne = async (id) => {
  return await ItemDeLaOrden.findByPk(id);
};

const create = async (data) => {
  return await ItemDeLaOrden.create(data);
};

const update = async (id, data) => {
  const item = await ItemDeLaOrden.findByPk(id);
  if (!item) return null;
  return await item.update(data);
};

const remove = async (id) => {
  const item = await ItemDeLaOrden.findByPk(id);
  if (!item) return null;
  await item.destroy();
  return { message: "Item de la orden eliminado exitosamente" };
};

const repository = { findAll, findOne, create, update, remove };

export default repository;
