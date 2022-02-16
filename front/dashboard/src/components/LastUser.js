import React from 'react';
function LastUser (props){    

return(
<React.Fragment>
<div className="col-lg-6 mb-4">
<div className="card shadow mb-4">
   
    <div className="card-body">
        <div className="text-center">  
        <h1>¡Hola!</h1>
        <h2> {props.first_name}</h2> 
        <h2> {props.last_name}</h2>          
        </div>
        <p>Gracias por unirte a nuestra comunidad, esperamos que puedas acompañarnos en esta maravillosa experiencia</p>
    </div>
</div>
</div>
</React.Fragment>
)}

export default LastUser;