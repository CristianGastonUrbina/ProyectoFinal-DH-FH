const User = require("../entities/user");
let db=require('../database/models')
function userValidator(req, res, next) {
  if (req.session.usuarioALogearse) {
    console.log("desde aca",req.session.usuarioALogearse,"hasta aca")
    let user=db.Users.findByPk(req.session.usuarioALogearse.id);
        return res.redirect('/users/Detalle/'+req.session.usuarioALogearse.id);
  }

  next();
}

module.exports = userValidator;


