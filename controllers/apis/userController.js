const fs = require("fs");
const db = require("../../database/models");

// const Product = require("../entities/product");

let userController = {
  list: (req, res) => {
    function showAllUsers(users) {
      allUsers = [];
      for (let i = 0; i < users.length; i++) {
        element = users[i];
        user = {
          id: element.id,
          first_name: element.first_name,
          last_name: element.last_name,
          email: element.email,
          image: element.image,
          detail: "http://localhost:3001/users/Detalle/" + element.id,

          category: element.category.name,
        };
        allUsers.push(user);
      }
      return allUsers;
    }

    db.Users.findAll({
      include: [{ association: "category" }],
    })
      .then(function (users) {
        res.json({
          total: users.length,
          status: 200,
          users: showAllUsers(users),
        });
      })
      .catch((err) => {
        console.log(err);
      });
  },

  detail: (req, res) => {
    id = req.params.id;
    db.Users.findByPk(id, {
      include: [{ association: "category" }],
    })
      .then(function (user) {
        res.json({
          status: 200,

          id: user.id,
          first_name: user.first_name,
          last_name: user.last_name,
          email: user.email,
          image: user.image,
          detail: "http://localhost:3001/users/Detalle/" + user.id,

          category: user.category.name,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  },
};

module.exports = userController;
