const express = require("express");
const router = express.Router();
const usersController = require("../../controllers/usersController");



//          v1/api/users/
router
  .route("/")
  .get(usersController.getAllUsers)     //VEMOS TODOS LOS USUARIOS
  .post(usersController.insertOneUser) //AÑADIMOS UN USUARIO

router
    .route("/update/:username")
    .patch(usersController.updateUserForUsername)

router
  .route("/:id")
  .get(usersController.getOneUser)      //VER UN USUARIO
  .delete(usersController.deleteUser)   //ELIMINAR UN USUARIO
  .patch(usersController.updateUser);   //ACTUALIZAMOS UN USUARIOO

router
    .route("/autentificacion/")
    .post(usersController.autenticationUser)

module.exports.router = router;
