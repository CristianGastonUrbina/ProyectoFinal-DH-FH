let express = require('express');
let server = express();
let path=require('path');

server.listen(3000,()=>console.log("Esta levantado el servidor"));

let publicPath=path.resolve(__dirname,"./public");
let viewsPath=path.resolve(__dirname,"./public/views");

server.use(express.static(publicPath));
server.get('/',(req,res)=> res.sendFile(viewsPath+'/index.html'));
server.get('/login',(req,res)=> res.sendFile(viewsPath+'/login.html'));
server.get('/productCart',(req,res)=> res.sendFile(viewsPath+'/productCart.html'));
server.get('/productDetails',(req,res)=> res.sendFile(viewsPath+'/productDetails.html'));
server.get('/register',(req,res)=> res.sendFile(viewsPath+'/register.html'));
