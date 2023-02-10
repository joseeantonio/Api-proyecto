const productosModelo = require("../database/productosModelo");
const { v1: uuid } = require("uuid");
const userModelos = require("../database/usersModelo");

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

const getAllProductLimit = (limite) => {
  const products = productosModelo.getAllProductLimit(limite)

  return products
}

const getOneProduct = (idProducto) => {
  const oneProduct = productosModelo.getOneProduct(idProducto);

  return oneProduct;
};
const deleteOneProduct = (id) => {
  console.log(id)
  const product = productosModelo.deleteOneProduct(id);
  return product
};
const updateOneProduct = (id,size,name,description,image,category,marca) => {
  const product = productosModelo.updateOneProduct(id,size,name,description,image,category,marca);

  return product;
};

const getAllProductMarca = (marca) => {
  const products = productosModelo.getAllProductMarca(marca)

  return products
}

const getAllProductCategory = (category) => {
  const products = productosModelo.getAllProductCategory(category)

  return products
}

const getAllProductBusqueda = (busqueda) => {
  const  products = productosModelo.getAllProductBusqueda(busqueda)

  return products
}

module.exports = {
  getAllProduct,
  insertOneProduct,
  getOneProduct,
  deleteOneProduct,
  updateOneProduct,
  getAllProductMarca,
  getAllProductCategory,
  getAllProductBusqueda,
  getAllProductLimit,
};
