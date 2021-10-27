let express = require("express");
let router = express.Router();
let productController = require("../controllers/productController");

router.get("/Carrito", productController.carrito);
router.get("/Detalle", productController.detalle);

module.exports = router;
