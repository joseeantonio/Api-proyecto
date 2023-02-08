const authenticationModelo = require("../database/authenticationModelo")
const {v4: uuid} = require("uuid")


const checkUser = (credenciales) => {

    //Comprobar si el user existe
    const usuario = authenticationModelo.checkUser(credenciales.email, credenciales.password)
    if(!usuario) return false
    return usuario.id
};

const generateSessionId = (id_usuario) => {

    //CMPROBAMOS SI EL USUARIO TIENE UNA SESSION ACTIVA
    let sessionId = authenticationModelo.checkSession(id_usuario)
    
    if(!sessionId){
        sessionId = uuid()
        authenticationModelo.addSession(id_usuario, sessionId)
    }

    return sessionId

};

module.exports = {
    checkUser,
    generateSessionId
}