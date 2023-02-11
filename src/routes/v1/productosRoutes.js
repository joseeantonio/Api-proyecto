const express = require("express")
const router = express.Router()
const productosController = require("../../controllers/productosController")

//URL AQUí: /v1/api/productos

router
  .route("/")
  .get(productosController.getAllProduct) //GET ALL PRODUCTS
  .post(productosController.insertOneProduct); //INSERT ONE PRODUCT

router
    .route('/paginacion/:limite')
    .get(productosController.getAllProductLimit) //GET ALL PRODUCTS WITH LIMIT

router.route("/:id")
    .get(productosController.getOneProduct) //GET ONE PRODUCT
    .delete(productosController.deleteOneProduct) //DELETE ONE PRODUCT
    .put(productosController.updateOneProduct) //UPDATE ONE PRODUT


//peso-libre   ||    peso-guiado
router.route("/marca/:marca")
    .get(productosController.getAllProductMarca)

router.route("/marca/:marca/:category")
    .get(productosController.getAllProductMarcaCategory)

router.route("/category/:category")
    .get(productosController.getAllProductCategory)

router.route("/busqueda/:busqueda")
    .get(productosController.getAllProductBusqueda)



module.exports.router = router