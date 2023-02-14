const usersServices = require("../services/usersServices");

const getAllUsers = (req, res, next) => {
  const allUsers = usersServices.getUsers();
  if (!allUsers) {
    res.status(404).send("NO HAY USUARIOS");
    return;
  }
  res.send(allUsers);
};

const autenticationUser = (req,res,next) => {
  const {username,password} = req.body;
  if (!username || !password){
    res.status(400).send("FALTAN DATOS PORA INSERTAR USUARIIOS");
    return;
  }

  const user = usersServices.autenticaUser( username,password );
  if (user) {
    res.json({msg:'registrado'});
    return;
  }else{
    res.json({msg:'no registrado'})
  }


}


const insertOneUser = (req, res, next) => {

  const { email, password,username } = req.body;
  if (!email || !password || !username) {
    res.status(400).send("FALTAN DATOS PORA INSERTAR USUARIIOS");
    return;
  }

  const newUser = usersServices.insertUser( email, password,username );
  console.log('gg')
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

const updateUserForUsername = (req,res,next) => {
  console.log('gg')
  const { username } = req.params;
  console.log(username)


  const { email, password,name } = req.body;
  console.log(name)

  const updateUser = usersServices.updateUserForUsername(email,password,username,name);

  if (updateUser) {
    res.json({msg:'actualizado'});
    return;
  }else{
    res.json({msg:'no actualizado'})
  }

}

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
  autenticationUser,
  updateUserForUsername,
};
