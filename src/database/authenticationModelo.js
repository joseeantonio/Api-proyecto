const usuarios = require("./users.json");
const sessions = require("./sessions.json");
const fs = require("fs")

const checkUser = (email, password) => {
  const usuario = usuarios.users.find(
    (usu) => usu.email === email && usu.password === password
  );
  return usuario;
};

const checkSession = (id_usuario) => {
  //COMPRUEBO SI LA SESSION EXISTE PARA EL ID_USUARIO
  const sessionId = sessions.sessions.find((sess) => sess.id === id_usuario);
  return sessionId;
};

const addSession = (id, sessionId) => {

  sessions.sessions.push({ id, sessionId });
  fs.writeFileSync(
    "./src/database/sessions.json",
    JSON.stringify(sessions, null, 2),
    "utf8"
  );
};

module.exports = {
  checkUser,
  checkSession,
  addSession
};
