//import React from 'react';
import React, {Component} from 'react';
import TypesList from './TypesList';

//function TypeCounts(){

/*let productTypes = [
		{name: "Blanco",
		amount: 5},
		{name:"Champagne",
		amount: 1},
		{name: "Espumoso",
		amount: 1},
		{name: "PetNat",
		 amount: 2},
		{name:"Rosado",
		amount: 3},
		{name:"Tinto",
		amount: 19},
		{name:"Cantidad Totales",
		amount: 6},
		
	]*/
	
	class TypeCounts extends Component{
		constructor(){
			super();
			this.state = {
				ourTypes : [] //estado inicial
			}
	
		}
	
		componentDidMount(){
			fetch('/api/categorys')
			.then(response => {
				return response.json()
			})
			.then(types =>{
				/* Object.entries(types.data.countByType) convierte objeto literal en array 
				   asi puedo leer las keys del objeto literal donde vienen 
				   los nombres de los types y tambien para usar map*/
				this.setState({
					ourTypes: Object.entries(types.meta.total)
				})
			})
		}

		render(){
			return (
				<React.Fragment>
					{/*<!-- types LIST -->*/}
					<h1 className="h3 mb-2 text-gray-800">Nuestras categorías</h1>
					
					{/*<!-- DataTales Example -->*/}
					<div className="card shadow mb-4">
						<div className="card-body">
							<div className="table-responsive">
								<table className="table table-bordered table-striped table-hover" id="dataTable" width="100%" cellspacing="0">
									<thead className="table-primary">
										<tr>
                                            <th>Categoría</th>
                                            <th>Cantidad</th>
										</tr>
									</thead>									
									<tbody>	
								{/*<!-- uso slice porque no quiero mostrar el ultimo elemento: totalTypes -->*/}
								{			
								  this.state.ourTypes.slice(0, this.state.ourTypes.length-1).map((type,index) => {
								  return <TypesList  {...type}  key={type + index} /> 
								})
								}	                                  
                                											
									</tbody>
								</table>
							</div>
						</div>
					</div>  
			   
			</React.Fragment>
			)
		}

    
	
}
export default TypeCounts;