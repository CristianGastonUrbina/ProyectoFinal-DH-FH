let express = require("express");
let router = express.Router();
let productController = require("../controllers/productController");

router.get("/Carrito", productController.cart);
router.get("/Detalle", productController.detail);
router.get("/Edicion", productController.edit);
router.get("/Creacion", productController.add);

router.post("/Creacion", productController.store);
router.put("/Edicion",productController.putEdit);
router.delete("/Eliminacion",productController.destroy);

module.exports = router;
