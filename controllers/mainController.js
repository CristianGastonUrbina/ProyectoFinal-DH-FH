const fs = require("fs");
const path = require("path");
const Product = require("../entities/product");
const productsFilePath = path.join(__dirname, "../data/products.json");
const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

let mainController = {
  index: function (req, res) {
    const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
    res.render("index", { product: products });
  },
};

module.exports = mainController;
