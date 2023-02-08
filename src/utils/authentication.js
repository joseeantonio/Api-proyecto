const authenticationService = require("../services/authenticationService")


const login = (req, res, next) => {
  
    //0. Obtenemos los diferentes datos de la petición
  const { email, password } = req.body;
  const { cookies } = req;

  if (!email && !password && !cookies.sessionId) {
    res.status(401).send({ mensaje: "NO AUTORIZADO" });
    return;
  }

  //1º Comprobar si email y password están en el sistema
  if(email && password){
    //COMPROBAMOS EMAIL Y PASSWORD
    const credenciales = {
        email,
        password
    }
    const idUserLogueado = authenticationService.checkUser(credenciales)
    console.log(idUserLogueado)
    if(!idUserLogueado){
        res.status(401).send({ mensaje: "NO AUTORIZADO" });
        return;
    } 

    //GENERAR UN SESSIONID, meterlo en la cookie y mandarlo al cliente
    const sessionId = authenticationService.generateSessionId(idUserLogueado)
    res.cookie("sessionId", sessionId, {httpOnly: true})
    next()
  } else if(cookies.sessionId){
    // 2º Comprobar si esa cookie contiene una session válida

    // COGEMOS LA COOKIe, y comprobamos en la BDD si esa cookie existe/es válida
  } else {
    res.send(500)
    return
  }

  
};

module.exports = {
  login,
};
