const cestasModelo = require("../database/cestasModelo");
const { v1: uuid } = require("uuid");
const productosModelo = require("../database/productosModelo");

const getAllCestas = () => {

    const cestas = cestasModelo.getAllCestas();
    return cestas;

}


const insertOneCesta = (username) => {

    const id = uuid();

    if (cestasModelo.getOneCesta(username)) {
        return false;
    }

    const insertedProduct = cestasModelo.insertOneCesta(username,id);
    return insertedProduct;

}


const getOneCesta = (username) => {
    const cesta = cestasModelo.getOneCesta(username);
    return cesta;
}


module.exports = {
    getAllCestas,
    getOneCesta,
    insertOneCesta,
};