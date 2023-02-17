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

    for (let i=0; i<datos.cestas.length; i++){
        if (datos.cestas[i].username===username){

            let existe = false
            for (let x=0;x<datos.cestas[i].productos.length;x++){
                console.log(datos.cestas[i].productos[x].id)
                console.log(product.id)
                if (datos.cestas[i].productos[x].id===product.id){
                    console.log(datos.cestas[i].productos[x].id.cantidad)
                    existe = true
                    datos.cestas[i].productos[x].cantidad+=1
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
            if (!existe){
                let objetoProducto = {
                    id:product.id,
                    cantidad:1
                }
                datos.cestas[i].productos.push(objetoProducto)
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
}


const getProducts = (username) => {

    const cestaUsername = getOneCesta(username)

    const arrObjetos = []

    // console.log(cestaUsername.productos.length)
    // console.log(datosProductos.productos.length)

    for (let i=0;i<cestaUsername.productos.length;i++){
        for (let x=0;x<datosProductos.productos.length;x++){
            if (cestaUsername.productos[i].id===datosProductos.productos[x].id){
                datosProductos.productos[x].cantidad = cestaUsername.productos[i].cantidad
                arrObjetos.push(datosProductos.productos[x])
            }
        }
    }
    // console.log('gg')
    return arrObjetos
}

const deleteProductCesta = (username,idProducto) => {

    for (let i=0; i<datos.cestas.length; i++){
        if (datos.cestas[i].username===username){
            for (let x=0;x<datos.cestas[i].productos.length;x++){
                if (datos.cestas[i].productos[x].id===idProducto){

                    if (datos.cestas[i].productos[x].cantidad===1){
                        const newArr = datos.cestas[i].productos.filter(function (item) {
                            return item.id !== datos.cestas[i].productos[x].id;
                        });
                        datos.cestas[i].productos=newArr
                        fs.writeFile(
                            "./src/database/cestas.json",
                            JSON.stringify(datos, null, 2),
                            "utf8",
                            (err) => {
                                throw new Error("ERROR AL ESCRIBIR");
                            }
                        );
                    }
                    else{
                        datos.cestas[i].productos[x].cantidad-=1
                    }

                }
            }
        }
    }

    return getProducts(username);

}





module.exports = {
    getAllCestas,
    getOneCesta,
    insertOneCesta,
    insertProductCesta,
    getProducts,
    deleteProductCesta
};