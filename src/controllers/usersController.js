const usersServices = require("../services/usersServices");

const getAllUsers = (req, res, next) => {
  const allUsers = usersServices.getUsers();
  if (!allUsers) {
    res.status(404).send("NO HAY USUARIOS");
    return;
  }
  res.send(allUsers);
};

const insertOneUser = (req, res, next) => {
  console.log(req.body);
  console.log(req.body);

  const { email, password,username } = req.body;
  console.log(name);
  if (!email || !password || !username) {
    res.status(400).send("FALTAN DATOS PORA INSERTAR USUARIIOS");
    return;
  }

  const newUser = usersServices.insertUser( email, password,username );
  if (!newUser) {
    res.status(400).send("ENTRADA DUPLICADA");
    return;
  }

  res.send(newUser);
};

const getOneUser = (req, res, next) => {
  const { id } = req.params;

  debugger
  const oneUser = usersServices.getUser(id);
  if (!oneUser) {
    res.status(404).send("NO ENCONTRADO");
    return;
  }
  res.send(oneUser);
};

const deleteUser = (req, res, next) => {
  const { id } = req.params;
  //console.log(id);
  const deletedUser = usersServices.deleteOneUser(id);
  //console.log(deletedUser);
  if (!deletedUser) {
    res.status(404).send("USUARIO NO ENCONTRADO");
    return;
  }
  res.send(deletedUser);
};

const updateUser = (req, res, next) => {
  const { id } = req.params;
  const { email, password,username } = req.body;

  const updateUser = usersServices.updateOneUser(id, email, password,username);

  res.send(updateUser);
};

module.exports = {
  getAllUsers,
  insertOneUser,
  getOneUser,
  deleteUser,
  updateUser,
};
