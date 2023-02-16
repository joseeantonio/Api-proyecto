const cestasServices = require("../services/cestasServices");
const productosServices = require("../services/productosServices");


const getAllcestas = (req,res,next) => {
    const allCestas = cestasServices.getAllCestas();
    if (!allCestas) {
        res.status(404).send("NO HAY CESTAS");
        return;
    }
    res.send(allCestas);
}

const insertCesta = (req,res,next) =>{

    const { username } = req.params;

    if(!username){
        res.status(400).send("FALTAN DATOS")
        return
    }

    const newCesta =cestasServices.insertOneCesta(username)
    if(!newCesta){
        res.status(400).send("ENTRADA DUPLICADA");
        return
    }
    res.send(newCesta)

}

const getOneCesta = (req,res,next) => {

    const { username } = req.params;

    const cesta = cestasServices.getOneCesta(username);
    if (!cesta) {
        res.status(404).send("NO EXISTE CESTA CON ESE USERNAME");
        return;
    }
    res.send(cesta);

}


const postInsertProductInCesta = (req,res,next) => {

    const { idProductousername } = req.params;

    const cesta = cestasServices.insertProductCesta(idProductousername);
    if (!cesta) {
        res.status(404).send("NO EXISTE CESTA CON ESE USERNAME");
        return;
    }
    res.send(cesta);
}


const getProductsCesta = (req,res,next) => {

    const { username } = req.params;

    const products = cestasServices.getProducts(username);

    res.send(products);

}





module.exports = {
    getAllcestas,
    getOneCesta,
    insertCesta,
    postInsertProductInCesta,
    getProductsCesta,
};