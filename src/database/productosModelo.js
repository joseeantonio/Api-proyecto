const datos = require("./productos.json");
const fs = require("fs");

const getAllProduct = () => {
  return datos.productos;
};

const getOneProduct = (id) => {
  var product = datos.productos.find((objeto) => {
    return objeto.id === id;
  });
  return product
};

const insertOneProduct = (newProduct) => {

    
  datos.productos.push(newProduct)

  //Escribo el producto nuevo en el fichero JSON
  fs.writeFile(
    "./src/database/productos.json",
    JSON.stringify(datos, null, 2),
    "utf8",
    (err) => {
      throw new Error("ERROR AL ESCRIBIR");
    }
  );

  return newProduct;
};


const deleteOneProduct = (id) => {
  var productDeleted = datos.productos.find((objeto) => {
    return objeto.id === id;
  });

  const product = productDeleted;

  const newArr = datos.productos.filter(function (item) {
    return item.id !== id;
  });
  datos.productos = newArr;
  fs.writeFile(
      "./src/database/productos.json",
      JSON.stringify(datos, null, 2),
      "utf8",
      (err) => {
        throw new Error("ERROR AL BORRAR USUARIO");
      }
  );

  return product;
}


const updateOneProduct = (id,size,name,description,image,category,marca) => {

  const productToBeUpdatedIndex = datos.productos.findIndex((objeto) => {
    return objeto.id === id;
  });
  console.log(name);
  console.log(datos.productos[productToBeUpdatedIndex]);
  if (name) {
    datos.productos[productToBeUpdatedIndex].name = name;
  }

  if (size) {
    datos.productos[productToBeUpdatedIndex].size = size;
  }

  if (description) {
    datos.productos[productToBeUpdatedIndex].description = description;
  }
  if (image) {
    datos.productos[productToBeUpdatedIndex].image = image;
  }
  if (category) {
    datos.productos[productToBeUpdatedIndex].category = category;
  }
  if (marca) {
    datos.productos[productToBeUpdatedIndex].marca = marca;
  }

  fs.writeFile(
      "./src/database/productos.json",
      JSON.stringify(datos, null, 2),
      "utf8",
      (err) => {
        throw new Error("ERROR AL BORRAR PRODUCTO");
      }
  );
}

module.exports = {
  getAllProduct,
  getOneProduct,
  insertOneProduct,
  deleteOneProduct,
  updateOneProduct,
};
