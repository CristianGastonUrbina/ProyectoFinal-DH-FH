const fs = require("fs");
const path = require("path");
const Product = require("../entities/product");
const productsFilePath = path.join(__dirname, "../data/products.json");
const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
const db = require("../database/models");

// index: function (req, res) {
//   const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
//   res.render("index", { product: products });
// }

let mainController = {
  index: function (req, res) {
    db.Products.findAll({
      include: [
        { association: "category" },
        { association: "target" },
        { association: "brand" },
      ],
    })
      .then(function (product) {
        if(req.session.usuarioALogearse&&req.session.usuarioALogearse.id_user_category == 3)
          res.render("indexAdmin", {product:product})
        else
          res.render("index", { product: product });
      })
      .catch(function (err) {
        console.log(err);
      });
  },
};

module.exports = mainController;
