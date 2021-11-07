let express = require("express");
let router = express.Router();
let userController = require("../controllers/userController");

router.get("/login", userController.login);
router.get("/register", userController.register);
router.post('/login',userController.checkLogin);
router.post('/register',userController.postRegister);
router.delete("/unregister",userController.destroy);
router.put('/editUser',userController.update);


module.exports = router;
