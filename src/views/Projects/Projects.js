import { React, useEffect } from "react";
import './projects.css';
import { useState } from "react";
import { Link } from "react-router-dom";
import { projectList } from "../../services/projectsList";
import { Project } from "./Project";
import { webSkills, dataScienceSkills } from "../../services/skillsList";
import { Carousel } from "../../components/Carousel/Carousel";
export const Projects = () => {
    const [data, setData] = useState(null);
    
    

    useEffect(() => {
        setData(projectList)
    }, [])

    if (!data) {
        return <h2>Loading...</h2>;
    }

    
    return (
            <div id="body-projects">
                <section id="grid">

                    {data.map(element => (
                        <Project id={element.id} />


                    ))}
                </section>
                <Carousel />
                
            </div>

        
    )


}

{/* <Link
                        key={element.id}
                        //to={`${element.skill_name}/${element.id}`}
                        to="#"
                        className="link-style"

                    >
                        
                  
                </Link> */}