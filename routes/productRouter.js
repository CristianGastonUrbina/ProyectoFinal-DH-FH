let express = require("express");
let router = express.Router();
let productController = require("../controllers/productController");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, res, cb) {
    cb(null, "public/images/products");
  },
  filename: function (req, res, cb) {
    cb(null, file.originalName + Date.now() + path.extname(file.originalName));
  },
});

let upload = multer(storage);

// Todos los productos
router.get("/", productController.list);
// Producto en detalle
// router.get("/Detalle", productController.detail);
router.get("/Detalle/:id", productController.detail);
// CArrito de compras
router.get("/Carrito", productController.cart);
//Edicion de producto
router.get("/Edicion", productController.edit);
router.put("/Edicion/:id", productController.update);
//Creacion de producto
router.get("/Creacion", productController.add);
router.post("/Creacion", productController.store);
// Borrado de producto
router.delete("/Eliminacion/:id", productController.destroy);

module.exports = router;
