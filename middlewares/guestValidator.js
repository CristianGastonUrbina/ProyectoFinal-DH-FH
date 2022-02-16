const User = require("../entities/user");

function guestValidator(req, res, next) {
  if (!req.session.usuarioALogearse) {
    res.render('/users/login');
  }

  next();
}

module.exports = guestValidator;
