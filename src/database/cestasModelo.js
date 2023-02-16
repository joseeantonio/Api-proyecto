const datos_cestas = require("./cestas.json");
const fs = require("fs");
const datos = require("./cestas.json");
const datosProductos = require("./productos.json")

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

const insertProductCesta = (username,idProducto) => {

    var product = datosProductos.productos.find((objeto) => {
        return objeto.id === idProducto;
    });

    // const lengthCestas = datos.cestas.length

    for (let i=0; i<datos.cestas.length; i++){
        if (datos.cestas[i].username===username){
            let objetoIdProducto = {
                id:product.id
            }
            datos.cestas[i].productos.push(objetoIdProducto)
            fs.writeFile(
                "./src/database/cestas.json",
                JSON.stringify(datos, null, 2),
                "utf8",
                (err) => {
                    throw new Error("ERROR AL ESCRIBIR");
                }
            );
            return datos.cestas[i]
        }
    }



}



module.exports = {
    getAllCestas,
    getOneCesta,
    insertOneCesta,
    insertProductCesta,
};