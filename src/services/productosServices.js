const productosModelo = require("../database/productosModelo");
const { v1: uuid } = require("uuid");

//LOGICA DE NEGOCIO

const getAllProduct = () => {
  const productos = productosModelo.getAllProduct();
  return productos;
};
const insertOneProduct = (size,name,description,image,category,marca) => {
  
  const id = uuid();

  const newProduct = {
    id,
    size,
    name,
    description,
    image,
    category,
    marca,
  };

  //COMPROBAMOS SI ESE PRODUCTO EXISTE EN LA BDD
  if (productosModelo.getOneProduct(newProduct)) {
    return false;
  }

  const insertedProduct = productosModelo.insertOneProduct(newProduct);
  return insertedProduct;
};

const getOneProduct = (nombreProducto) => {
  const oneProduct = productosModelo.getOneProduct(nombreProducto);

  return oneProduct;
};
const deleteOneProduct = (id) => {
  console.log(id)
  const product = productosModelo.deleteOneProduct(id);
  return product
};
const updateOneProduct = () => {};

module.exports = {
  getAllProduct,
  insertOneProduct,
  getOneProduct,
  deleteOneProduct,
  updateOneProduct,
};
