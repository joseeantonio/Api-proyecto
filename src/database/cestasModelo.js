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

    const cesta = {
        id,
        username,
        productos: []
    }

    datos.cestas.push(cesta)

    fs.writeFile(
        "./src/database/cestas.json",
        JSON.stringify(datos, null, 2),
        "utf8",
        (err) => {
            throw new Error("ERROR AL ESCRIBIR");
        }
    );

    return cesta;

}



module.exports = {
    getAllCestas,
    getOneCesta,
    insertOneCesta,
};