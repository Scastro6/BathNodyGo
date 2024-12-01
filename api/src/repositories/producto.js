import model from '../models/producto.js'

let productos = [...model];

const findAll = () => {
    return productos;
}

const create = (album) => {
    productos.push(album);
    
    return album;
}

const findOne = (id) => {
    const result = productos.find(x => x.id == id);

    return result;
}

const update = (producto) => {
    const index = productos.findIndex(item => item.id == producto.id);

    if (index > -1) {
        productos[index] = producto;
        return true;
    }
    else 
        return false   
}

const remove = (id) => {
    const index = productos.findIndex(item => item.id == id);

    if (index > -1) {
        productos.splice(index,1);
        return true;
    }
    else   
        return false;
} 

const repository = { findAll, create, findOne, update, remove }

export default repository;