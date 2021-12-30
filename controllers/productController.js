const fs = require("fs");
const db = require("../database/models");

// const Product = require("../entities/product");

let productController = {
  list: (req, res) => {
    db.Products.findAll()
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
    db.Products.findByPk(id)
      .then(function (product) {
        res.render("./products/productDetails", { product: product });
      })
      .catch((err) => {
        console.log(err);
      });
  },

  edit: (req, res) => {
    product = Product.findProductbyPK(req.params.id);
    res.render("./products/productEdit", { product: product });
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
      id_brands: req.body.brand,
    })
      .then(function () {
        res.redirect("/products");
      })
      .catch(function (err) {
        console.error(err);
      });

    //!Obsoleto a partir del uso de DB
    // let prod = new Product.Product(
    //   null,
    //   req.body.name,
    //   req.body.manufacturer,
    //   req.body.model,
    //   req.body.description,
    //   req.body.category,
    //   req.body.price,
    //   req.body.target,
    //   req.body.tags,
    //   imageName,
    //   req.body.ship,
    //   req.body.warranty,
    //   req.body.stock
    // );
    // Product.store(prod);
    //
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
