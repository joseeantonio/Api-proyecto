const cestasServices = require("../services/cestasServices");


const getAllcestas = (req,res,next) => {
    const allCestas = cestasServices.getAllCestas();
    if (!allCestas) {
        res.status(404).send("NO HAY CESTAS");
        return;
    }
    res.send(allCestas);
}






module.exports = {
    getAllcestas,
};