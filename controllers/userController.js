const fs = require("fs");
const User = require("../entities/user");
const bcrypt = require("bcryptjs");
const { validationResult } = require("express-validator");

let userController = {
  login: (req, res) => {
    if (req.session.usuariologueado != undefined) {
      let ruta = "/users/detalle/" + req.session.usuariologueado.id;

      return res.redirect(ruta);
    }
    res.render("./users/login");
  },
  register: (req, res) => {
    res.render("./users/register");
  },
  checkLogin: (req, res) => {
    let errors = validationResult(req); //Para levantar los errores enviados por express-validator
    let users = User.findAll();
    if (errors.isEmpty()) {
      let users = User.findAll();
      users === "" ? (users = []) : ""; //Si no llego a tener users, creo un array vacio
      let usuarioALogearse;

      for (let i = 0; i < users.length; i++) {
        if (users[i].email === req.body.email) {
          if (bcrypt.compareSync(req.body.password, users[i].password)) {
            usuarioALogearse = users[i]; //Si lo encuentro, lo guardo
            break;
          }
        }
      }

      if (usuarioALogearse == undefined) {
        //Si no lo encuentro, redirecciono

        return res.render("./users/login", {
          errors: { msg: "Credenciales invalidas" },
          old: req.body,
        });

        //Aca se hace una especie de mimica a como vienen los errores si estuviara usarndo express validator, cosa que si la pgaina ya esta armada para funcionar con express validator tambien me aparesca enste mensaje
      }

      req.session.usuarioALogearse = usuarioALogearse;
      if (req.body.recuerdame != undefined) {
        res.cookie("recuerdame", usuarioALogearse.email, {
          maxAge: 600000,
        }); //!ACA CREO LA COOKIE

        //No guardo todo el user ya que tengo poco espacio en las cookies. MaxAGE reciebe en milisegundos, cuanto tiempo va a durar la cookie
      }

      let ruta = "/users/detalle/" + usuarioALogearse.id;

      return res.redirect(ruta);
    } else {
      return res.render("./users/login", {
        errors: errors.mapped(),
        old: req.body,
      });
    }
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
    if (!errores.isEmpty()) {
      return res.render("./users/register", {
        mensajesDeError: errores.mapped(),
        old: req.body,
      });
    } else {
      User.create(user);
      let users = User.findAll();
      res.render("./users/users", { users: users });
    }
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
