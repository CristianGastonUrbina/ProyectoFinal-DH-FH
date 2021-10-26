let path=require('path');
let viewsPath=path.resolve(__dirname,"../views");
let mainController ={
    index:(req,res)=> res.sendFile(viewsPath+'/index.html'),
    login:(req,res)=> res.sendFile(viewsPath+'/login.html'),
    register:(req,res)=> res.sendFile(viewsPath+'/register.html'),
    productCart:(req,res)=> res.sendFile(viewsPath+'/productCart.html'),
    productDetails:(req,res)=> res.sendFile(viewsPath+'/productDetails.html')
};

module.exports=mainController;