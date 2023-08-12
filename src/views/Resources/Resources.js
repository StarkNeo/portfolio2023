import React from "react";
import { resourcesList } from "../../services/resourcesList";
import './resources.css';
export function Resources() {
    console.log(resourcesList);
    
    let list=resourcesList.map((element)=>(
    <>
    <h1>{element.name}</h1>
    <ul key={element.name}>    
    </ul>
    </>
    
    ))

    console.log(list)
    return (
        <>
        {list}
        </>

    )
}