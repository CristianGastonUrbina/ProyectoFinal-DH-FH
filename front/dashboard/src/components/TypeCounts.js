//import React from 'react';
import React, {Component, useState,useEffect} from 'react';
import TypesList from './TypesList';
	
function TypeCounts(){
	const [types,setType]=useState([]);

	
		useEffect(()=>{
			fetch('/api/categorys')
			.then(response => {
				return response.json()
			})
			.then(types =>{
				/* Object.entries(types.data.countByType) convierte objeto literal en array 
				   asi puedo leer las keys del objeto literal donde vienen 
				   los nombres de los types y tambien para usar map*/
				setType(types.data)
					
				})
				.catch(error => console.log(error))

			},[])
		

			return (
				<React.Fragment>
					{/*<!-- types LIST -->*/}
					<h1 className="h3 mb-2 text-gray-800">Tipos de equipamiento en stock</h1>
					
					{/*<!-- DataTales Example -->*/}
					<div className="card shadow mb-4">
						<div className="card-body">
							<div className="table-responsive">
								<table className="table table-bordered table-striped table-hover" id="dataTable" width="100%" cellspacing="0">
									<thead className="table-primary">
										<tr>
                                            <th>Identificador de Categoría</th>
                                            <th>Descripcion</th>
										</tr>
									</thead>									
									<tbody>	
								{/*<!-- uso slice porque no quiero mostrar el ultimo elemento: totalTypes -->*/}
								{			
								  types.map((type,index) => {
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


export default TypeCounts;