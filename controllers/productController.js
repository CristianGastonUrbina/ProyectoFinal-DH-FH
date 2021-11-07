const fs = require('fs');
const path = require('path');
const Product= require('../entities/product');
const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));


function store(req,res){
  req.body.id=products.length;
  let prod=new Product(
    req.body.id,
    req.body.manufacturer,
    req.body.model,
    req.body.description,
    req.body.category,
    req.body.colors,
    req.body.price,
    req.body.target,
    req.body.tags,
    req.body.image
  );
  products.push(prod);
  fs.writeFileSync(productsFilePath,JSON.stringify(products,null,' '));
  res.redirect('/');
}

function update(req,res){
  idProd=req.params.id;
  let prod=new Product(
    req.params.id,
    req.body.manufacturer,
    req.body.model,
    req.body.description,
    req.body.category,
    req.body.colors,
    req.body.price,
    req.body.target,
    req.body.tags,
    req.body.image
  );
  products[idProd]=prod;
  fs.writeFileSync(productsFilePath,JSON.stringify(products,null,' '));
  res.redirect('/');

}


function destroy(req,res){
  products.splice(req.params.id,1);
  fs.writeFileSync(productsFilePath,JSON.stringify(products,null,' '));
  res.redirect('/');
}

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
  store:store,
  update:update,
  destroy:destroy
  

};

module.exports = productController;
