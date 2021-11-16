const { randomInt } = require("crypto");
const fs = require("fs");
const path = require("path");
const Product = require("../entities/product");
const productsFilePath = path.join(__dirname, "../data/products.json");
const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

function findProduct(id) {
  found = (obj) => obj.id === +id;
  index = products.findIndex(found);
  product = products[index];
  return product;
}

function findProductIndex(id) {
  found = (obj) => obj.id === +id;
  index = products.findIndex(found);
  return index;
}

function store(req, res) {
  if (req.file) {
    imageName = req.file.filename;
  } else {
    imageName = "dummy.jpg";
  }

  if (req.body.id === "") {
    id = (Math.random() * Date.now()) / 3;
  }

  let prod = new Product(
    id,
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
  products.push(prod);
  fs.writeFileSync(productsFilePath, JSON.stringify(products, null, " "));
  res.redirect("/");
}

function update(req, res) {
  idProd = +req.params.id;
  console.log(req.file);
  if (req.file) {
    imageName = req.file.filename;
  } else {
    prod = findProduct(idProd);
    imageName = prod.image;
  }
  let product = new Product(
    idProd,
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
  products.splice(findProductIndex(idProd), 1, product);
  fs.writeFileSync(productsFilePath, JSON.stringify(products, null, " "));
  res.redirect("/");
}

function destroy(req, res) {
  products.splice(findProductIndex(req.params.id), 1);
  fs.writeFileSync(productsFilePath, JSON.stringify(products, null, " "));
  res.redirect("/");
}

let productController = {
  list: (req, res) => {
    res.render("./products/products", { product: products });
  },
  cart: (req, res) => {
    res.render("./products/productCart");
  },
  detail: (req, res) => {
    id = +req.params.id;
    product = findProduct(id);
    res.render("./products/productDetails", { product });
  },

  edit: (req, res) => {
    id = +req.params.id;
    product = findProduct(id);
    res.render("./products/productEdit", { product });
  },
  add: (req, res) => {
    res.render("./products/productAdd");
  },
  store: store,
  update: update,
  destroy: destroy,
};

module.exports = productController;
