const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const v1 = require("./routes/v1/indexRoutes");
const auth = require("./utils/authentication");
const cors = require('cors')

app.use(express.json());
app.use(cors())
app.use(cookieParser());
app.use((req, res, next) => {
  let date = new Date().toLocaleTimeString();
  console.log(
    "\x1b[41m%s\x1b[0m",
    `[info] ${date} peticion: ${req.method} ${req.originalUrl}`
  );
  next();
});

//app.use(auth.login)
app.use("/v1/api", v1.router);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`[INFO] Servidor escuchando en ${PORT} `);
});
