import Base from "./base";

const endpoint = "/itemDeCarrito";


const create = async (request) => {
  return await Base.post(endpoint, request);
};

const findAll = async () => {
  return await Base.get(endpoint);
};


const findOne = async (id) => {
  const newEndpoint = endpoint.concat("/", id);
  return await Base.get(newEndpoint);
};

const update = async (request) => {
  return await Base.put(endpoint, request);
};


const remove = async (id) => {
  const newEndpoint = endpoint.concat("/", id);
  return await Base.remove(newEndpoint);
};


const itemDeCarritoApi = { create, findAll, findOne, update, remove };

export default itemDeCarritoApi;