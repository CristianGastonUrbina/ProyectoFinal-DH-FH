let express = require('express');
let server = express();
let path=require('path');
let publicPath=path.resolve(__dirname,"./public");
let viewsPath=path.resolve(__dirname,"./views");
server.use(express.static(publicPath));
server.listen(3000);
server.get('/',(req,res)=> res.sendFile(viewsPath+'/home.html'));