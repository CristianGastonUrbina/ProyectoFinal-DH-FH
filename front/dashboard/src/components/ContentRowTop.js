import React, {useState, useEffect} from 'react';
import Panels from './Panels';
import LastUser from "./LastUser"
import LastProduct from "./LastProduct"
import MostSold from "./MostSold"
import imagenF from "../assets/images/index/brindis-vino-tinto.png"
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
			//console.log(lastUser)
            
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
                      <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 50 +'rem'}} src={imagenF} alt="brindis-vino-tinto "/>
                    <h1>Nosotros</h1>                        
        </div>
        <p> Somos una nueva propuesta que te acerca lo mejor de la cultura vitivinícola, acompañanos a encontrar el vino perfecto para vos  </p> 
        <p> Sumate a la experiencia VIINO y recorré junto a nosotros los mejores aromas y productos de calidad del mercado </p>
    </div>
</div>
</div>
					{/*<!-- Content Row Last Movie in Data Base -->*/}
					<div className= "row">
                    <MostSold {...products2} key={products2}  />
                   
                     <LastUser {...users} key={0} />                    
                    				
					{/*<!-- Genres in DB -->*/}
					<LastProduct {...products} key={products}  />
                    
						{/*<!--End Genres In Db-->*/}		
					
				</div>

                </div>
				{/*<!--End Content Row Top-->*/}

        </React.Fragment>
    )

}
export default ContentRowTop;