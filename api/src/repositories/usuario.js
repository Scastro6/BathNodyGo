import Usuario from "../models/Usuario.js";

const findAll = async () => {
  return await Usuario.findAll();
};

const findOne = async (id) => {
  return await Usuario.findByPk(id);
};

const create = async (data) => {
  return await Usuario.create(data);
};

const update = async (id, data) => {
  const usuario = await Usuario.findByPk(id);
  if (!usuario) return null;
  return await usuario.update(data);
};

const remove = async (id) => {
  const usuario = await Usuario.findByPk(id);
  if (!usuario) return null;
  await usuario.destroy();
  return { message: "Usuario eliminado exitosamente" };
};

const repository = { findAll, findOne, create, update, remove };

export default repository;
