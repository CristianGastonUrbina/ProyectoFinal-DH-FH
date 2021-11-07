let express = require("express");
let router = express.Router();
let productController = require("../controllers/productController");
const multer=require('multer');

const storage=multer.diskStorage({
    destination:function(req,res,cb){
        cb(null,'public/images/products');
    },
    filename:function(req,res,cb){
        cb(null,file.originalName+Date.now()+path.extname(file.originalName));
    }
})


let upload=multer(storage);


router.get("/Carrito", productController.cart);
router.get("/Detalle", productController.detail);
router.get("/Edicion", productController.edit);
router.get("/Creacion", productController.add);

router.post("/Creacion", productController.store);
router.put("/Edicion/:id",productController.update);
router.delete("/Eliminacion/:id",productController.destroy);

module.exports = router;
