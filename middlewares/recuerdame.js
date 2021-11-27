function recodameMiddleware(req, res, next) {
  if (
    req.cookie.recuerdame != undefined &&
    req.session.usuariologueado == undefined
  ) {


    for (let i = 0; i < users.length; i++) {
      if (users[i].email === req.cookie.recuerdame) {
          usuarioALogearse = users[i]; //Si lo encuentro, lo guardo
          break;
        }
      }

      //! ACA debo agregar la logica que busca en todos los mail de los usuarios y los compara con lo req.cookie.recuerdame y ese usuario se guarda en usuarioAlogearse

      //!Finalmente agrego a mi logica que el usuiario que encontre va a estar dendtro de mi session
    }
    next();
  }
}

module.exports = recodameMiddleware;
