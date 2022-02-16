import React from 'react';

function TypesList(props){
    return(
        <React.Fragment>
            <tr >
				<td >{props[0]}</td>
                <td >{props[1]}</td>
			</tr>
        </React.Fragment>
    )
}
export default TypesList;