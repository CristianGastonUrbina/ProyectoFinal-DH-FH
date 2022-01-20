const fs = require("fs");
const db = require("../database/models");

// const Product = require("../entities/product");

let productController = {
  list: (req, res) => {
    db.Products.findAll({
      include: [
        { association: "category" },
        { association: "target" },
        { association: "brand" },
      ],
    })
      .then(function (products) {
        res.render("./products/products", { products: products });
      })
      .catch((err) => {
        console.log(err);
      });
  },
  cart: (req, res) => {
    res.render("./products/productCart");
  },

  detail: (req, res) => {
    id = req.params.id;
    db.Products.findByPk(id, {
      include: [
        { association: "category" },
        { association: "target" },
        { association: "brand" },
      ],
    })
      .then(function (product) {
        res.render("./products/productDetails", { product: product });
      })
      .catch((err) => {
        console.log(err);
      });
  },

  edit: (req, res) => {
    let id = req.params.id;

    let product = db.Products.findByPk(id, {});

    let brands = db.Brands.findAll();
    let categorys = db.Product_categorys.findAll();
    let targets = db.Targets.findAll();

    Promise.all([brands, categorys, targets, product])
      .then(function ([brands, categorys, targets, product]) {
        res.render("./products/productEdit", {
          brands: brands,
          categorys: categorys,
          targets: targets,
          product: product,
        });
      })
      .catch(function (err) {
        console.log(err);
      });
  },
  add: (req, res) => {
    let brands = db.Brands.findAll();
    let categorys = db.Product_categorys.findAll();
    let targets = db.Targets.findAll();

    Promise.all([brands, categorys, targets])
      .then(function ([brands, categorys, targets]) {
        res.render("./products/productAdd", {
          brands: brands,
          categorys: categorys,
          targets: targets,
        });
      })
      .catch(function (err) {
        console.log(err);
      });
  },
  store: (req, res) => {
    if (req.file) {
      imageName = req.file.filename;
    } else {
      imageName = "dummy.jpg";
    }
    db.Products.create({
      name: req.body.name,
      model: req.body.model,
      description: req.body.description,
      price: req.body.price,
      id_target: req.body.target,
      id_product_category: req.body.category,
      image: imageName,
      warranty: req.body.warranty,
      id_brand: req.body.brand,
    })
      .then(function () {
        res.redirect("/products");
      })
      .catch(function (err) {
        console.error(err);
      });
  },

  update: (req, res) => {
    if (req.file) {
      imageName = req.file.filename;
    } else {
      imageName = "dummy.jpg";
    }
    db.Products.update(
      {
        name: req.body.name,
        model: req.body.model,
        description: req.body.description,
        price: req.body.price,
        id_target: req.body.target,
        id_product_category: req.body.category,
        image: imageName,
        warranty: req.body.warranty,
        id_brands: req.body.brand,
      },
      { where: { id: req.params.id } }
    )
      .then(function () {
        res.redirect("/products");
      })
      .catch(function (err) {
        console.error(err);
      });
  },

  destroy: (req, res) => {
    db.Products.destroy({
      where: {
        id: req.params.id,
      },
    }).then(function () {
      res.redirect("/products");
    });
  },
};

module.exports = productController;
