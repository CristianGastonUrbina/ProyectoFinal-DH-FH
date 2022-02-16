import React, {useState, useEffect} from 'react';
import Panels from './Panels';
import imagenF from "../assets/images/index/dc.jpg"
function ContentRowTop(){
	
	const [users, setUser] = useState ([]);

    useEffect ( () => {
        fetch("/api/users")
        .then (response => {
            return response.json()
        })
        .then(users => {
			const usersTotal = users.data.total
			
            setUser(usersTotal)
            
        })
        .catch(error => console.log(error))
    },[])

	const [products, setProduct] = useState ([]);

	useEffect ( () => {
        fetch("/api/products")
        .then (response => {
            return response.json()
        })
        .then(products => {
			
			const productsTotal = products.data.total 
            setProduct(productsTotal)
			//console.log(lastProduct)            
        })
        .catch(error => console.log(error))
    },[])


    const [products2, setProduct2] = useState ([]);

    useEffect ( () => {
        fetch("/api/categorys")
        .then (response => {
            return response.json()
        })
        .then(categorys => {
			
			const categorysTotal = categorys.data.total 
            setProduct2(categorysTotal)
			//console.log(lastProduct)            
        })
        .catch(error => console.log(error))
    },[])


    return(
        <React.Fragment>
				{/*<!-- Content Row Top -->*/}
				<div className="container-fluid">					
				
					<Panels key={0} />
					
                   <div className="col-lg-6 mb-4 width-100">
                        <div className="card shadow mb-4">   
                        <div className="card-body  ">
                      <div className="text-center">  
                      <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 50 +'rem'}} src={imagenF} alt="Centro de datos"/>
                    <h1>Datos Generales</h1>                        
        </div>
        <p> Este pequeño portal te permitira visualizar el status general del e-comerce y de su logistica interna  </p> 
        <p> Los datos que podras encontrar aqui, reflejan el stock disponible, las categorias y marcas que la agencia cubre hoy dia, y los usuarios que la estan utilizando. </p>
    </div>
</div>
</div>
				
				</div>

               
        </React.Fragment>
    )

}
export default ContentRowTop;