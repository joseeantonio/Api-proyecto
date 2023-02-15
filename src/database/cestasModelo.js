const datos_cestas = require("./cestas.json");
const fs = require("fs");

const getAllCestas = () => {
    return datos_cestas.cestas
}



module.exports = {
    getAllCestas,
};