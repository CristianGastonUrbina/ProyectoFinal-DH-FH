let productController = {
  carrito: (req, res) => {
    res.render("./products/productCart");
  },
  detalle: (req, res) => {
    res.render("./products/productDetails");
  },
  editar: (req, res) => {
    res.render("./products/productEdit");
  },
  agregar: (req, res) => {
    res.render("./products/productAdd");
  },
};

module.exports = productController;
