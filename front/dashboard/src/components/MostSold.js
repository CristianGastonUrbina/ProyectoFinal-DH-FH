import React from 'react';
import imagenFondo from "../assets/images/product-img/Buscado-Vivo-o-Muerto-La-Verdad-San-Pablo-2017.png"


function MostSold (props){
    

return(
<React.Fragment>
<div className="col-lg-6 mb-4">
<div className="card shadow mb-4">
   
    <div className="card-body">
        <div className="text-center">  
        <h1>¡Te presentamos nuestro preferido por nuestros clientes!</h1>
        <div className="text-center">
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src={imagenFondo} alt="loschocos-pinotnoir "/>
                    </div>
        <h2> {props.name}</h2>   
        <p>{props.description}</p> 
        <p>Categoría: {props.type}</p>
        <p>{props.winemakers}</p>
             
        </div>
    </div>
</div>
</div>
</React.Fragment>
)}

export default MostSold;