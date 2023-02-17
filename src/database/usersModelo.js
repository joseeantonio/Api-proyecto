const datos = require("./users.json");
const fs = require("fs");
const {insertOneCesta} = require("./cestasModelo");
const {v1: uuid} = require("uuid");

const getAllUsers = () => {
  return datos.users;
};

const autenticaUser = (username,password) => {

  var allusers = datos.users


  for (let i=0;i<allusers.length;i++){
    console.log(allusers[i])
    if (allusers[i].password===password && allusers[i].username===username){
      return allusers[i]
    }
  }

}

const getOneUser = (id,username,email) => {
  var user = datos.users.find((objeto) => {
    return objeto.id === id;
  });
  if (!user){
    var user = datos.users.find((objeto) => {
      return objeto.username === username;
    });
    return user
  }else if(!email){
    var user = datos.users.find((objeto) => {
      return objeto.email === email;
    });
    return user
  }
  else{
    return user
  }

};

const insertOneUser = (newUser) => {
  datos.users.push(newUser);
  fs.writeFileSync(
    "./src/database/users.json",
    JSON.stringify(datos, null, 2),
    "utf8"
  );
  const id = uuid();
  insertOneCesta(newUser.username,id)
  return newUser;
};


const updateUserForUsername = (email,password,username,name) =>{

  const userToBeUpdatedIndex = datos.users.findIndex((objeto) => {
    return objeto.username === username;
  });

  if (email) {
    datos.users[userToBeUpdatedIndex].email = email;
  }

  if (password) {
    datos.users[userToBeUpdatedIndex].password = password;
  }

  if (name) {
    datos.users[userToBeUpdatedIndex].username = name;
  }

  fs.writeFileSync(
      "./src/database/users.json",
      JSON.stringify(datos, null, 2),
      "utf8"
  );
  return userToBeUpdatedIndex

}


const updateOneUser = (id, email, password,username) => {
  console.log(id);
  const userToBeUpdatedIndex = datos.users.findIndex((objeto) => {
    return objeto.id === id;
  });

  if (email) {
    datos.users[userToBeUpdatedIndex].email = email;
  }

  if (password) {
    datos.users[userToBeUpdatedIndex].password = password;
  }

  if (username) {
    datos.users[userToBeUpdatedIndex].username = username;
  }

  fs.writeFile(
    "./src/database/users.json",
    JSON.stringify(datos, null, 2),
    "utf8",
    (err) => {
      throw new Error("ERROR AL BORRAR USUARIO");
    }
  );
};
const deleteOneUser = (id) => {
  var usuarioDeleted = datos.users.find((objeto) => {
    return objeto.id === id;
  });

  const user = usuarioDeleted;

  const newArr = datos.users.filter(function (item) {
    return item.id !== id;
  });
  //BORRAR USUARIO
  datos.users = newArr;

  //console.log(editedData);
  fs.writeFile(
    "./src/database/users.json",
    JSON.stringify(datos, null, 2),
    "utf8",
    (err) => {
      throw new Error("ERROR AL BORRAR USUARIO");
    }
  );

  return user;
};

module.exports = {
  getAllUsers,
  getOneUser,
  insertOneUser,
  deleteOneUser,
  updateOneUser,
  autenticaUser,
  updateUserForUsername
};
