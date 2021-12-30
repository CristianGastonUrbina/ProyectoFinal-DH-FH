const { randomInt } = require("crypto");
const fs = require("fs");
let db = require("../database/models");

const Product = require("../entities/product");

let productController = {
  list: (req, res) => {
    res.render("./products/products", { product: Product.findAll() });
  },
  cart: (req, res) => {
    res.render("./products/productCart");
  },
  detail: (req, res) => {
    id = req.params.id;
    product = Product.findProductbyPK(id);
    res.render("./products/productDetails", { product });
  },

  edit: (req, res) => {
    product = Product.findProductbyPK(req.params.id);
    res.render("./products/productEdit", { product: product });
  },
  add: (req, res) => {
    res.render("./products/productAdd");
  },
  store: (req, res) => {
    if (req.file) {
      imageName = req.file.filename;
    } else {
      imageName = "dummy.jpg";
    }

    let prod = new Product.Product(
      null,
      req.body.name,
      req.body.manufacturer,
      req.body.model,
      req.body.description,
      req.body.category,
      req.body.price,
      req.body.target,
      req.body.tags,
      imageName,
      req.body.ship,
      req.body.warranty,
      req.body.stock
    );
    Product.store(prod);
    res.redirect("/");
  },
  update: (req, res) => {
    if (req.file) {
      imageName = req.file.filename;
    } else {
      prod = Product.findProductbyPK(req.params.id);
      imageName = prod.image;
    }
    let product = new Product.Product(
      +req.params.id,
      req.body.name,
      req.body.manufacturer,
      req.body.model,
      req.body.description,
      req.body.category,
      req.body.price,
      req.body.target,
      req.body.tags,
      imageName,
      req.body.ship,
      req.body.warranty,
      req.body.stock
    );
    Product.edit(product);
    res.redirect("/");
  },
  destroy: (req, res) => {
    Product.delete(+req.params.id);
    res.redirect("/");
  },
};

module.exports = productController;
