const fs = require("fs");
const db = require("../../database/models");

let categoryController = {
  list: (req, res) => {
    db.Product_categorys.findAll()
      .then(function (categorys) {
        res.json({
          meta:{
            total: categorys.length,
            status: 200
          },
          data: categorys,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  },
};

module.exports = categoryController;
