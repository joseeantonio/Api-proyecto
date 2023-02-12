const datos = require("./productos.json");
const fs = require("fs");

const getAllProduct = () => {
  return datos.productos;
};

const getAllProductLimit = (limite) => {
  const newArr = []
  const array = datos.productos

  for (let i=0;i<array.length;i++){
    if (newArr.length<limite){
      newArr.push(array[i])
    }
  }
  // console.log(newArr.length)

  return newArr

}

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

const getAllProductMarcaPrecio = (marca,precio) => {

  const arrMarca = getAllProductMarca(marca)
  const precios = []
  const arrFinal = []
  if (precio==='alto-bajo'){
    for (let i=0; i<arrMarca.length; i++){
      if (!precios.includes(arrMarca[i].size)){
        precios.push(arrMarca[i].size)
      }
    }
    precios.sort((a,b)=> a-b)
    for (let i=0; precios.length>i; i++){
      for (let x=0;arrMarca.length>x;x++){
        if (precios[i]===arrMarca[x].size){
          arrFinal.unshift(arrMarca[x])
        }
      }
    }

    return arrFinal
    // const precioUnicos = [... new Set(arrMarca)]
  }else if (precio==='bajo-alto'){

    for (let i=0; i<arrMarca.length; i++){
      if (!precios.includes(arrMarca[i].size)){
        precios.push(arrMarca[i].size)
      }
    }
    precios.sort((a,b)=> a-b)
    for (let i=0; precios.length>i; i++){
      for (let x=0;arrMarca.length>x;x++){
        if (precios[i]===arrMarca[x].size){
          arrFinal.push(arrMarca[x])
        }
      }
    }

    return arrFinal

  }else{
    return arrFinal
  }

}

const getAllProductMarcaCategory = (marca,category) => {
  console.log(marca)

  const arrMarca = getAllProductMarca(marca)
  console.log(arrMarca)
  const newArr = arrMarca.filter(function (item) {
    var categoryFinal = category.replace("-"," ")
    return item.category === categoryFinal;
  });
  return newArr
}

const getAllProductMarca = (marca) => {
  const newArr = datos.productos.filter(function (item) {
    return item.marca === marca;
  });
  return newArr
}

const getAllProductCategory = (category) => {
  const newArr = datos.productos.filter(function (item) {
    var categoryFinal = category.replace("-"," ")
    return item.category === categoryFinal;
  });
  return newArr
}

const getAllProductBusqueda = (busqueda) => {

  var busquedaFinal = busqueda.replace("-"," ")
  const newArr = datos.productos.filter(function (item) {

    return item.name.includes(busquedaFinal)
  })
  return newArr
}


module.exports = {
  getAllProduct,
  getOneProduct,
  insertOneProduct,
  deleteOneProduct,
  updateOneProduct,
  getAllProductMarca,
  getAllProductCategory,
  getAllProductBusqueda,
  getAllProductLimit,
  getAllProductMarcaCategory,
  getAllProductMarcaPrecio,
};
