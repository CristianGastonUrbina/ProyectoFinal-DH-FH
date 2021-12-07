const User = require("../entities/user");
function recodameMiddleware(req, res, next) {
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
    if (usuarioALogearse != undefined) {
      req.session.usuariologueado = usuarioALogearse;
    } //Lo agrego a mi logica que el usuiario que encontre va a estar dendtro de mi session
  } else if (req.session.usuariologueado) {
    res.locals.user = req.session.usuariologueado;
  }
  next();
}

module.exports = recodameMiddleware;
