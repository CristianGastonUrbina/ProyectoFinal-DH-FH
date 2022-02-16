
// import React from 'react';
import React, {Component} from 'react';
import SmallCard from './SmallCard';

/*let productsInDataBase = {
    color:   "primary",
    titulo: "Productos componen nuestra oferta",
    //valor: 31,
    icono: "fas fa-wine-bottle",
}

let types ={
    color:   "success",
    titulo: "Categorías para elegir",
    valor: 6,
    icono: "fas fa-clipboard-list",
}

let users = {
    color:   "primary",
    titulo: "Usuarios confían en nosotros",
    valor: 15,
    icono: "fas fa-user",
}

let varietals = {
    color:   "success",
    titulo: "Varietales",
    valor: 8,
    icono: "fas fa-window-restore",
}

let winemakers = {
    color:   "primary",
    titulo: "Enólogos confían en nosotros",
    valor: 25,
    icono: "fas fa-wine-glass",
}

let producers = {
    color:   "success",
    titulo: "Productores nos acompañan",
    valor: 20,
    icono: "fas fa-smile-wink",
}

let cardProps = [productsInDataBase,types,users, varietals,winemakers,producers];
*/

class Panels extends Component{
	constructor(){
		super();
		this.state = {
			cardProps : [] //estado inicial
		}
	
	}
	
	componentDidMount(){
        let promises = [
            fetch('/api/products').then(response => response.json()),
            fetch('/api/users').then(response => response.json()),
            fetch('/api/categorys').then(response => response.json())

          ];
      
          Promise.all(promises)
          .then(response => {
      
            let products = response[0];
            let users = response[1];
            let categorys= response[2];
      
            this.setState({
                          
              cardProps: [
                {
                  color: "primary",
                  titulo: "Cantidad de productos en stock",
                  valor: products.meta.total,
                  icono: "fas fa-wine-bottle",
                },
                {
                  color: "primary",
                  titulo: "Usuarios registrados",
                  valor: users.meta.total,
                  icono: "fas fa-user",
                },
                {
                  color:   "success",
                  titulo: "Categorias de productos",
                  valor: categorys.meta.total,
                  icono: "fas fa-window-restore",
                }   

              ]
            })
      
          })

        /* Santi
		fetch('/api/products')
		.then(response => {
			return response.json()
		})
		.then(types =>{
			this.setState({
				typesQtty: types.data.countByType.totalTypes
                
			})
		})*/
	}

	render(){
    
        return (
            <React.Fragment>       
            <div className="row">
                {
                    
                    this.state.cardProps.map((producto,index)=>{
                        return <SmallCard  {...producto}  key= {producto + index}/>
                    })
                }      
            </div>
            </React.Fragment>
        )
    }
    
}
export default Panels;