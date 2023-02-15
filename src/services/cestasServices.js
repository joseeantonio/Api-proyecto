const cestasModelo = require("../database/cestasModelo");
const { v1: uuid } = require("uuid");
const productosModelo = require("../database/productosModelo");

const getAllCestas = () => {

    const cestas = cestasModelo.getAllCestas();
    return cestas;

}


module.exports = {
    getAllCestas,
};