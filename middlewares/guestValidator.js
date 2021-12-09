const User = require("../entities/user");

function guestValidator(req, res, next) {
  if (req.session.usuarioALogearse) {
    let user = User.findUserbyPK(req.session.usuarioALogearse.id);
    return res.render("./users/userDetail", { user: user });
  }

  next();
}

module.exports = guestValidator;
