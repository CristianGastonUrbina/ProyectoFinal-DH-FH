let productController = {
  carrito: (req, res) => {
    res.render("./products/productCart");
  },
  detalle: (req, res) => {
    res.render("./products/productDetails");
  },
};

module.exports = productController;
