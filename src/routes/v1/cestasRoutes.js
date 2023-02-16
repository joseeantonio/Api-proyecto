
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

router
    .route("/productosCesta/:username")
    .get(cestasController.getProductsCesta)

router
    .route("/anadirProducto/cesta/:idProductousername")      //separados por * ej: 11s2s31*peri02
    .post(cestasController.postInsertProductInCesta)

module.exports.router = router