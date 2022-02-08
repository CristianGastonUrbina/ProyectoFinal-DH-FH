const fs = require("fs");
const db = require("../../database/models");
const { validationResult } = require("express-validator");

// const Product = require("../entities/product");

let productController = {
  list: (req, res) => {
    function ContarCategoria(productos) {
      let categorias = {};
      for (let i = 0; i < productos.length; i++) {
        const element = productos[i].category.name;
        if (element in categorias) {
          categorias[element] = categorias[element] + 1;
        } else {
          categorias[element] = 1;
        }
      }
      return categorias;
    }
    function ShowAllProducts(products) {
      allproducts = [];
      for (let index = 0; index < products.length; index++) {
        const product = products[index];

        producto = {
          id: product.id,
          name: product.name,
          description: product.description,
          model: product.model.name,
          image: product.image,
          price: product.price,
          target: product.target.name,
          category: product.category.name,
          warranty: product.warranty,
          detail: "http://localhost:3001/products/Detalle/" + product.id,
        };
        allproducts.push(producto);
      }
      return allproducts;
    }

    db.Products.findAll({
      include: [
        { association: "category" },
        { association: "target" },
        { association: "brand" },
      ],
    })
      .then(function (products) {
        res.json({
          total: products.length,
          totalByCategory: ContarCategoria(products),
          status: 200,
          products: ShowAllProducts(products),
        });
      })
      .catch((err) => {
        console.log(err);
      });
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
        res.json({
          status: 200,
          id: product.id,
          name: product.name,
          description: product.description,
          model: product.model.name,
          image: product.image,
          price: product.price,
          target: product.target.name,
          category: product.category.name,
          warranty: product.warranty,
          detail: "http://localhost:3001/products/Detalle/" + product.id,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  },
};

module.exports = productController;
