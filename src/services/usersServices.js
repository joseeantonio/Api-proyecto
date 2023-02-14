const userModelos = require("../database/usersModelo.js");
const { v1: uuid } = require("uuid");

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



  if (userModelos.getOneUser(nuevoUsuario.id,username,email)) {
    return false;
  }

  const usuarioInsertado = userModelos.insertOneUser(nuevoUsuario);
  return usuarioInsertado;
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
  const user = userModelos.updateUserForUsername(email,password,username,name)
  return user
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
