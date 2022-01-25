const session = require("express-session");
let db = require("../database/models");

function checkEmail(req, res, next) {
  let email = req.body.email;
  db.Users.findOne({ where: { email: email } })
    .then(function (user) {
      req.session.user = user.email;
    })
    .catch(function (err) {
      req.session.user = null;
    });
  next();
}
module.exports = checkEmail;
