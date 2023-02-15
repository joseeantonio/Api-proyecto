const datos_cestas = require("./cestas.json");
const fs = require("fs");
const datos = require("./cestas.json");

const getAllCestas = () => {
    return datos_cestas.cestas
}


const getOneCesta=(username)=>{

    var cesta = datos.cestas.find((objeto) => {
        return objeto.username === username;
    });
    return cesta

}



module.exports = {
    getAllCestas,
    getOneCesta,
};