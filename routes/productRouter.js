let express = require("express");
let router = express.Router();
let productController = require("../controllers/productController");
let upload = require("../middlewares/multerProducts");
let admin = require("../middlewares/adminValidator");
const expressValidator = require("../middlewares/expValidator");
let guestValidator=require("../middlewares/guestValidator");
const adminValidator = require("../middlewares/adminValidator");
// Todos los productos
router.get("/", productController.list);
// Producto en detalle
// router.get("/Detalle", productController.detail);
router.get("/Detalle/:id", productController.detail);
// CArrito de compras
router.get("/Carrito", guestValidator, productController.cart);
//Edicion de producto

router.get("/Edicion/:id",adminValidator, productController.edit);
router.put(
  "/Edicion/:id",
  upload.single("image"),
  expressValidator.prodValidation,
  productController.update
);
//Creacion de producto
router.get("/Creacion", adminValidator, productController.add);
router.post(
  "/Creacion",
  upload.single("image"),
  expressValidator.prodValidation,
  productController.store
);
// Borrado de producto
router.delete("/Eliminacion/:id", adminValidator, productController.destroy);

module.exports = router;
