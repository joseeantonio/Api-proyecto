const express = require("express")
const router = express.Router()
const productosController = require("../../controllers/productosController")

//URL AQUí: /v1/api/productos

router
  .route("/")
  .get(productosController.getAllProduct) //GET ALL PRODUCTS
  .post(productosController.insertOneProduct); //INSERT ONE PRODUCT

router.route("/:prod")
    .get(productosController.getOneProduct) //GET ONE PRODUCT
    .delete(productosController.deleteOneProduct) //DELETE ONE PRODUCT
    .put() //UPDATE ONE PRODUT



module.exports.router = router