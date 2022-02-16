
// import React from 'react';
import React, {Component} from 'react';
import SmallCard from './SmallCard';

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