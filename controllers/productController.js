const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

let productController = {
  cart: (req, res) => {
    res.render("./products/productCart");
  },
  detail: (req, res) => {
    res.render("./products/productDetails");
  },
  edit: (req, res) => {
    res.render("./products/productEdit");
  },
  add: (req, res) => {
    res.render("./products/productAdd");
  },
  store:(req,res)=>{

  },
  putEdit:(req,res)=>{

  },
  destroy:(req,res)=>{
    
  }

};

module.exports = productController;
