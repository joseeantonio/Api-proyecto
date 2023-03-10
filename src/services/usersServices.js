const userModelos = require("../database/usersModelo.js");
const { v1: uuid } = require("uuid");
const datos = require("../database/users.json");

const getUsers = () => {
  const usuarios = userModelos.getAllUsers();
  return usuarios;
};

const autenticaUser = (username,password) =>{

  const oneUsuario = userModelos.autenticaUser(username,password);
  return oneUsuario;

}

const insertUser = ( email, password,username ) => {
  const id = uuid();

  const nuevoUsuario = {
    id,
    email,
    password,
    username
  };

  if (!userModelos.comprobarInsertar(nuevoUsuario)) {
    return false;
  }else{
    const usuarioInsertado = userModelos.insertOneUser(nuevoUsuario);
    return usuarioInsertado;
  }

};

const getUser = (id) => {
  const oneUsuario = userModelos.getOneUser(id);
  return oneUsuario;
};

const deleteOneUser = (id) => {
  console.log(id);
  const user = userModelos.deleteOneUser(id);
  return user;
};

const updateUserForUsername = (email,password,username,name) => {

  const nuevoUsuario = {
    email,
    password,
    username
  };
  console.log(nuevoUsuario)
  if (!userModelos.comprobarActualizar(nuevoUsuario)) {
    console.log('f')
    return false;
  }else {
    const user = userModelos.updateUserForUsername(email,password,username,name)
    return user
  }
}

const updateOneUser = (id, email, password,username) => {
  const user = userModelos.updateOneUser(id, email, password,username);
  console.log(user);
  return user;
};

module.exports = {
  getUsers,
  insertUser,
  getUser,
  deleteOneUser,
  updateOneUser,
  autenticaUser,
  updateUserForUsername
};
