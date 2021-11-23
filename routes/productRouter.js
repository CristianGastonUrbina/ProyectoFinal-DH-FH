let express = require("express");
let router = express.Router();
let productController = require("../controllers/productController");
let upload = require("../middlewares/multer");

// Todos los productos
router.get("/", productController.list);
// Producto en detalle
// router.get("/Detalle", productController.detail);
router.get("/Detalle/:id", productController.detail);
// CArrito de compras
router.get("/Carrito", productController.cart);
//Edicion de producto

router.get("/Detalle/Edicion/:id", productController.edit);
router.put(
  "/Detalle/Edicion/:id",
  upload.single("image"),
  productController.update
);
//Creacion de producto
router.get("/Creacion", productController.add);
router.post("/Creacion", upload.single("image"), productController.store);
// Borrado de producto
router.delete("/Eliminacion/:id", productController.destroy);

module.exports = router;
