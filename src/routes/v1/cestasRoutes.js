
const express = require("express");
const router = express.Router()
const cestasController = require("../../controllers/cestasController");



//          v1/api/cestas/
router
    .route("/")
    .get(cestasController.getAllcestas)     //VEMOS TODAS LAS CESTAS


router
    .route("/:username")
    .get(cestasController.getOneCesta)
    .post(cestasController.insertCesta)

// router
//     .route("añadirProducto/cesta/:idProducto*username")
//     .post(cestasController.postInsertProductInCesta)

module.exports.router = router