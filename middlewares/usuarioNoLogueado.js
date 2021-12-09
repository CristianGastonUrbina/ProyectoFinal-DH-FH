const User = require("../entities/user");
function usuarioNoLogueadoMiddleware(req, res, next) {
  let users = User.findAll();
  if (
    req.session.usuariologueado == undefined &&
    req.cookies.recuerdame != undefined
  ) {
    let usuarioALogearse;
    for (let i = 0; i < users.length; i++) {
      if (users[i].email === req.cookies.recuerdame) {
        usuarioALogearse = users[i]; //Si lo encuentro, lo guardo
        break;
      }
    }
    if (usuarioALogearse == undefined) {
        next();
    }else{
        break;
    }
}

module.exports = usuarioNoLogueadoMiddleware;
