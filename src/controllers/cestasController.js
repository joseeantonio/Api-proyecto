const cestasServices = require("../services/cestasServices");


const getAllcestas = (req,res,next) => {
    const allCestas = cestasServices.getAllCestas();
    if (!allCestas) {
        res.status(404).send("NO HAY CESTAS");
        return;
    }
    res.send(allCestas);
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





module.exports = {
    getAllcestas,
    getOneCesta,
};