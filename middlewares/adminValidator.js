function adminValidator(req, res, next) {
  console.log(req.session.usuarioALogearse);
  if (req.session.usuarioALogearse.category === "admin") {
    console.log("sos admin");
    next();
  } else {
    return res.redirect("/users/login");
  }

  next();
}
module.exports = adminValidator;
