const fs = require("fs");
const User = require("../entities/user");
const bcrypt = require("bcryptjs");
const { validationResult } = require("express-validator");
const db = require("../database/models");


let userController = {
  login: (req, res) => {
    res.render("./users/login");
  },
  register: (req, res) => {
    let categorys = db.User_categorys.findAll();
    Promise.all([categorys]).then(function([categorys]){
      res.render("./users/register",{categorys:categorys});

    })
  },
  checkLogin: (req, res) => {
    let errors = validationResult(req); //Para levantar los errores enviados por express-validator
    if (errors.isEmpty()) {
      let users = db.Users.findAll();
      Promise.all([users]).then(function([users]){

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
      }) 
    }else {
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
    let user = {
      email: req.body.email,
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      password: bcrypt.hashSync(req.body.password, 10),
      phone: req.body.phone,
      zip: req.body.zip,
      id_user_category: req.body.category,
      image: imageName,
      address: req.body.address
    };

    if (!errores.isEmpty()) {
      let categorys = db.User_categorys.findAll();
      Promise.all([categorys]).then(function([categorys]){
        return res.render("./users/register",{categorys:categorys, 
          mensajesDeError: errores.mapped(),
          old: req.body
        });
  
      
     
      });
    } else {
      db.Users.create(user);
      let users = db.Users.findAll();
      res.render("./users/users", { users: users });
    }
  },
  destroy: (req, res) => {
    db.Users.delete(+req.params.id);
    let users = db.Users.findAll();
    res.redirect("/users");
  },
  update: (req, res) => {
    res.send("fuiste por get a update");
  },
  list: (req, res) => {
    db.Users.findAll()
    .then(function (users) {
      res.render("./users/users", { users: users });
      })
    .catch((err) => {
      console.log(err);
    });  //  
  },
  detail: (req, res) => {
    let user = db.Users.findUserbyPK(req.params.id);
    res.render("./users/userDetail", { user: user });
  },
  putUpdate: (req, res) => {
    res.send("fuiste por put a update");
  },
};

module.exports = userController;
