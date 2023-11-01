import { React, useEffect } from "react";
import './projects.css';
import { useState } from "react";
import { Link} from "react-router-dom";
import { projectList } from "../../services/projectsList";
import { Project } from "./Project";

export const Projects = () => {
    const [data, setData] = useState(null);
    
    useEffect(() => {
        setData(projectList)
    }, [])

    if (!data) {
        return <h2>Loading...</h2>;
    }

    console.log(data)

    return (
        <>
            
            <div id="grid">
            
                {data.map(element => (
                        <Project id={element.id} />
                    

                ))}



            </div>
        </>
    )


}

{/* <Link
                        key={element.id}
                        //to={`${element.skill_name}/${element.id}`}
                        to="#"
                        className="link-style"

                    >
                        
                  
                </Link> */}