const express = require("express")
const router = express.Router()
const productosController = require("../../controllers/productosController")

//URL AQUí: /v1/api/productos

router
  .route("/")
  .get(productosController.getAllProduct) //GET ALL PRODUCTS
  .post(productosController.insertOneProduct); //INSERT ONE PRODUCT

router.route("/:id")
    .get(productosController.getOneProduct) //GET ONE PRODUCT
    .delete(productosController.deleteOneProduct) //DELETE ONE PRODUCT
    .put(productosController.updateOneProduct) //UPDATE ONE PRODUT


router.route("/marca/:marca")
    .get(productosController.getAllProductMarca)





module.exports.router = router