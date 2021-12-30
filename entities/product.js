//! TODO ESTE ARCHIVO QUEDA OBSOLETO A LA HORA DE USAR DB!!!!

// const fs = require("fs");
// const path = require("path");

// Products = {
//   Product: function Product(
//     id,
//     name,
//     manufacturer,
//     model,
//     description,
//     category,
//     price,
//     target,
//     tags,
//     image,
//     ship,
//     warranty,
//     stock
//   ) {
//     this.id = id;
//     this.name = name;
//     this.manufacturer = manufacturer;
//     this.model = model;
//     this.description = description;
//     this.category = category;
//     this.price = price;
//     this.target = target;
//     this.tags = tags;
//     this.image = image;
//     this.ship = ship;
//     this.warranty = warranty;
//     this.stock = stock;
//   },

//   productsFilePath: path.join(__dirname, "../data/products.json"),

//   getData: function () {
//     return JSON.parse(fs.readFileSync(this.productsFilePath, "utf-8"));
//   },

//   findAll: function () {
//     return this.getData();
//   },

//   generateId: function () {
//     products = this.findAll();
//     lastProduct = products.pop();
//     if (lastProduct) {
//       newId = lastProduct.id + 1;
//       return newId;
//     } else {
//       return 1;
//     }
//   },

//   findProductbyPK: function (id) {
//     let products = this.findAll();
//     let product = products.find((obj) => obj.id === +id);
//     return product;
//   },
//   findProductbyField: function (field, value) {
//     let products = this.findAll();
//     let product = products.find((obj) => obj[field] === value);
//     return product;
//   },

//   store: function (newProduct) {
//     let allProducts = this.findAll();
//     (newProduct.id = this.generateId()), allProducts.push(newProduct);

//     fs.writeFileSync(
//       this.productsFilePath,
//       JSON.stringify(allProducts, null, " ")
//     );
//   },
//   delete: function (id) {
//     let allProducts = this.findAll();
//     let newProducts = allProducts.filter((obj) => obj.id !== id);
//     fs.writeFileSync(this.productsFilePath, JSON.stringify(newProducts));
//     return true;
//   },
//   edit: function (newProduct) {
//     let allProducts = this.findAll();
//     let newproductIndex = allProducts.findIndex(
//       (obj) => obj.id === newProduct.id
//     );
//     allProducts.splice(newproductIndex, 1, newProduct);
//     fs.writeFileSync(
//       this.productsFilePath,
//       JSON.stringify(allProducts, null, " ")
//     );
//     return newProduct;
//   },
// };
// test = {
//   name: "Tu mama",
//   manufacturer: "Intel",
//   model:
//     "In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt.",
//   description: "Pellentesque eget nunc.",
//   category: "Software",
//   price: "",
//   target: "ultrahigh",
//   image: "_DEFblmg110.jpg",
//   ship: "1",
//   warranty: "12",
// };

// console.log(Products.store(test));

// module.exports = Products;
