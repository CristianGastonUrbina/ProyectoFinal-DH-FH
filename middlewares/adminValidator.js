function adminValidator(req, res, next) {
  // console.log(res.locals.user.category);
  if (res.locals.user && res.locals.user.category === "admin") {
    console.log("sos admin");
    next();
  } else {
    res.redirect("/users/login");
  }
}
module.exports = adminValidator;
