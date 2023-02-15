
const express = require("express");
const router = express.Router()
const cestasController = require("../../controllers/cestasController");



//          v1/api/cestas/
router
    .route("/")
    .get(cestasController.getAllcestas);     //VEMOS TODAS LAS CESTAS


router
    .route("/:username")
    .post(cestasController.getOneCesta)

module.exports.router = router