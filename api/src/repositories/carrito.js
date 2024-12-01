import model from '../models/carrito.js'

let carrito = {...model};

const findAll = () => {
    return carrito;
}

const addItem = (album) => {
    carrito.items.push(album);
    
    return album;
}

const remove = (id) => {
    const index = carrito.items.findIndex(item => item.id == id);

    if (index > -1) {
        carrito.items.splice(index,1);
        return true;
    }
    else   
        return false;
} 

const removeAll = () => {
    carrito.items = [];
    return true;
}

const repository = { findAll, addItem, remove,removeAll }

export default repository;