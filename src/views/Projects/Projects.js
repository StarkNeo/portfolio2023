import { React, useEffect } from "react";
import './projects.css';
import { useState } from "react";
import { Link} from "react-router-dom";
import { projectList } from "../../services/projectsList";

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

                    <Link
                        key={element.id}
                        //to={`${element.skill_name}/${element.id}`}
                        to="#"
                        className="link-style"

                    >
                        <figure key={element.id} title="Click here">

                            <img className="lang-icons" src={element.image_path} alt="project" />
                            <figcaption>
                                <p>
                                    
                                    <strong> {element.name}</strong><br />
                                    <strong> {element.skill_name}</strong><br /><br />
                                    <span>{element.description}</span><br></br><br></br>
                                    <span>{element.purpose}</span><br></br> <br></br>
                                    <span>{element.year}</span>

                                </p>

                            </figcaption>

                        </figure>

                    </Link>

                ))}



            </div>
        </>
    )


}