let express = require("express");
let router = express.Router();
let productController = require("../controllers/productController");
let upload = require("../middlewares/multerProducts");
let admin = require("../middlewares/adminValidator");

// Todos los productos
router.get("/", productController.list);
// Producto en detalle
// router.get("/Detalle", productController.detail);
router.get("/Detalle/:id", productController.detail);
// CArrito de compras
router.get("/Carrito", productController.cart);
//Edicion de producto

router.get("/Edicion/:id", productController.edit);
router.put("/Edicion/:id", upload.single("image"), productController.update);
//Creacion de producto
router.get("/Creacion", productController.add);
router.post("/Creacion", upload.single("image"), productController.store);
// Borrado de producto
router.delete("/Eliminacion/:id", admin, productController.destroy);

module.exports = router;
