function adminValidator(req, res, next) {
  console.log("desde aca lo trae",req.session.usuarioALogearse, "esto trae el usuario que esta en la sesion");
  if (!(req.session.usuarioALogearse&&req.session.usuarioALogearse.id_user_category ==3) ) {
    return res.redirect("/users/login");

  } 

  next();
}
module.exports = adminValidator;
