const fs = require("fs");
const User = require("../entities/user");
const bcrypt = require("bcryptjs");
const { validationResult } = require("express-validator");

let userController = {
  login: (req, res) => {
    res.render("./users/login");
  },
  register: (req, res) => {
    res.render("./users/register");
  },
  checkLogin: (req, res) => {
    //Validar usuario y dar sesion
    res.redirect("/");
  },
  postRegister: (req, res) => {
    if (req.file) {
      imageName = req.file.filename;
    } else {
      imageName = "dummy.jpg";
    }

    let errores = validationResult(req);

    let user = new User.User(
      null,
      req.body.email,
      req.body.firstname,
      req.body.lastname,
      bcrypt.hashSync(req.body.password, 10),
      req.body.phone,
      req.body.zip,
      req.body.category,
      imageName
    );
    User.create(user);
    let users = User.findAll();
    if (!errores.isEmpty()) {
      return res.render("./users/register", {
        mensajesDeError: errores.mapped(),
      });
    }
    res.render("./users/users", { users: users });
  },
  destroy: (req, res) => {
    User.delete(+req.params.id);
    let users = User.findAll();
    res.redirect("/users");
  },
  update: (req, res) => {
    res.send("fuiste por get a update");
  },
  list: (req, res) => {
    let users = User.findAll();
    res.render("./users/users", { users: users });
  },
  detail: (req, res) => {
    let user = User.findUserbyPK(req.params.id);
    res.render("./users/userDetail", { user: user });
  },
  putUpdate: (req, res) => {
    res.send("fuiste por put a update");
  },
};

module.exports = userController;
