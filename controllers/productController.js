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
  let prod = new Product(
    +req.body.id,
    req.body.name,
    req.body.manufacturer,
    req.body.model,
    req.body.description,
    req.body.category,
    req.body.price,
    req.body.target,
    req.body.tags,
    req.body.image,
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
    req.body.image,
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
