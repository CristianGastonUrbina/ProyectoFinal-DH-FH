let express=require('express');
let mainController=require('../controllers/mainController');
let mainRouter=express.Router();

mainRouter.get('/',mainController.index);
mainRouter.get('/productCart',mainController.productCart);
mainRouter.get('/productDetails',mainController.productDetails);
mainRouter.get('/login',mainController.login);
mainRouter.get('/register',mainController.register);


module.exports= mainRouter;