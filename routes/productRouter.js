let express = require("express");
let router = express.Router();
let productController = require("../controllers/productController");
const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
<<<<<<< HEAD
    cb(null, path.join(__dirname, "../public/images/products"));
  },
  filename: function (req, file, cb) {
    console.log(file);
    cb(null, Date.now() + file.originalname);
=======
    cb(null, path.join(__dirname,'../public/images/products'));
  },
  filename: function (req, file, cb) {
    console.log(file);
    cb(null,file.fieldname+'-'+Date.now());
>>>>>>> 1259bf97d0512a24d4def6ff02928c7375d0e2d7
  },
});

let upload = multer({ storage });

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
