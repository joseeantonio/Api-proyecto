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

const insertOneCesta = (username,id)=>{

    datos.cestas.push

}



module.exports = {
    getAllCestas,
    getOneCesta,
    insertOneCesta,
};