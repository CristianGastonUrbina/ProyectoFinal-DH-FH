const User = require("../entities/user");
function usuarioNoLogueadoMiddleware(req, res, next) {
  let users = User.findAll();
  if (
    req.session.usuariologueado == undefined 
  ) 
  next();
}

module.exports = usuarioNoLogueadoMiddleware;
