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
          data: products,
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
          data: product,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  },
};

module.exports = productController;
