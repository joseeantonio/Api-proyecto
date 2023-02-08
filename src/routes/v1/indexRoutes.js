const express = require("express");
const router = express.Router();
const productosRoutes = require("./productosRoutes");
const usersRouter = require("./usersRoutes");
//URL AQUÍ: /v1/api
router.get("/", (req, res, next) => {
  res.send("Hola Mundo");
});

router.use("/users", usersRouter.router);
router.use("/productos", productosRoutes.router);

module.exports.router = router;
