let path=require('path');
let viewsPath=path.resolve(__dirname,"../views");
let mainController ={
    index:
    function (req,res) {
        res.sendFile(viewsPath+'/index.html')
    },
    login:
    function (req,res) {
         res.sendFile(viewsPath+'/login.html')
    },
    register:
    function (req,res){
        res.sendFile(viewsPath+'/register.html')
    },
    productCart:
    function (req,res) {
        res.sendFile(viewsPath+'/productCart.html')
    },
    productDetails:
    function (req,res) {
        res.sendFile(viewsPath+'/productDetails.html')
    }
};

module.exports=mainController;