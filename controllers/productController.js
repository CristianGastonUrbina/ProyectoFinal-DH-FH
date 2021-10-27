let productController = {
  carrito: (req, res) => {
    res.render("productCart");
  },
  detalle: (req, res) => {
    res.render("productDetails");
  },
};

module.exports = productController;
