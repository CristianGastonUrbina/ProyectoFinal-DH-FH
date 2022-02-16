import React from 'react';

function ProductsList(props){
    return(
        <React.Fragment>
            <tr >
				<td >{props.name}</td>
                <td >{props.description}</td>
                <td >{props.category}</td>
			</tr>
        </React.Fragment>
    )
}
export default ProductsList;