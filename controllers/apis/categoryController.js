const fs = require("fs");
const db = require("../../database/models");

let categoryController = {
  list: (req, res) => {
    db.Product_categorys.findAll()
      .then(function (categorys) {
        res.json({
          total: categorys.length,
          status: 200,
          products: categorys,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  },
};

module.exports = categoryController;
