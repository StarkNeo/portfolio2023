import React from "react";
import { projectList } from "../../services/projectsList";

export const Project = (props) => {
    let id = Number(props.id);
    let array = projectList.filter(element => element.id === id);
    
    return (

        array.map(project => (


            <>
                <figure>
                    <img src={project.image_path} alt='img'/>
                    <figcaption>{project.name}</figcaption>
                </figure>


            </>


        ))

    )
}

