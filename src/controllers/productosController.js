const productosServices = require("../services/productosServices");
const usersServices = require("../services/usersServices");

//SE IMPLEMENTA LA LOGICA DE LA APLICACION
const getAllProduct = (req, res, next) => {
  const allProducts = productosServices.getAllProduct();
  if (!allProducts) {
    res.status(404).send("NO HAY PRODUCTOS");
    return;
  }
  res.send(allProducts);
};
const insertOneProduct = (req, res, next) => {

    console.log(req.body)

    const {size,name,description,image,category,marca} = req.body

    if( !size || !name ||!description || !image || !category || !marca){
        res.status(400).send("FALTAN DATOS")
        return
    }

    const newProduct = productosServices.insertOneProduct(size,name,description,image,category,marca)
    if(!newProduct){
        res.status(400).send("ENTRADA DUPLICADA");
        return
    }
    res.send(newProduct)

};
const getOneProduct = (req, res, next) => {
  const { id } = req.params;

  const oneProduct = productosServices.getOneProduct(id);

  if (!oneProduct) {
    res.status(404).send("NO ENCONTRADO");
    return;
  }
  res.send(oneProduct);
};
const deleteOneProduct = (req, res, next) => {
    const { id } = req.params;
    // console.log(id);
    const deletedProduct = productosServices.deleteOneProduct(id);
    // console.log(deletedProduct);
    if (!deletedProduct) {
        res.status(404).send("PRODUCTO NO ENCONTRADO");
        return;
    }
    res.send(deletedProduct);
};
const updateOneProduct = (req, res, next) => {
    const { id } = req.params;
    const {size,name,description,image,category,marca} = req.body;
    console.log(req.body);

    const updateProduct = productosServices.updateOneProduct(id,size,name,description,image,category,marca);

    res.send(updateProduct);
};

module.exports = {
  getAllProduct,
  insertOneProduct,
  getOneProduct,
  deleteOneProduct,
  updateOneProduct,
};
