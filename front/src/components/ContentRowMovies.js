import React, { useEffect } from 'react';
import { useState } from 'react';
import SmallCard from './SmallCard';

/*  Cada set de datos es un objeto literal */

/* <!-- Movies in DB --> */

let productsInDb = {
    title: 'Productos en la base',
    color: 'primary', 
    cuantity: 0,
    icon: 'fa-clipboard-list'
}

/* <!-- Total awards --> */

let usersInDb = {
    title:'Total de Usuarios', 
    color:'success', 
    cuantity: 0,
    icon:'fa-award'
}

/* <!-- Actors quantity --> */

let categorysInDb = {
    title:'Total de Categorias' ,
    color:'warning',
    cuantity:0,
    icon:'fa-user-check'
}


let promiseProducts=fetch('/api/Products').then(data=>data.json());
let promiseUsers=fetch('/api/Users').then(data=>data.json());
let promiseCategorys=fetch('/api/Categorys').then(data=>data.json());



function ContentRowMovies(){
    let [propsState,setPropsState] = useState([productsInDb, usersInDb, categorysInDb]);
    useEffect(()=>{
        setPropsState(()=>{
            
            Promise.all([promiseProducts,promiseUsers,promiseCategorys]).then((responses)=>{

                productsInDb.cuantity=responses[0].total;
                usersInDb.cuantity=responses[1].total;
                categorysInDb.cuantity=responses[2].total;
            
                })

        })
    })
    return (
    
        <div className="row">
            
            {propsState.map( (prop, i) => {

                return <SmallCard {...prop} key={i}/>
            
            })}

        </div>
    )
}

export default ContentRowMovies;