import { React, useEffect } from "react";
import './projects.css';
import { useState } from "react";
import { Link } from "react-router-dom";
import { projectList } from "../../services/projectsList";
import { Project } from "./Project";
import { webSkills, dataScienceSkills } from "../../services/skillsList";
export const Projects = () => {
    const [data, setData] = useState(null);
    const [array, setArray] = useState(webSkills);
    const [skillsData, setSkillsData] = useState(dataScienceSkills);
    const [indice, setIndice] = useState(0);

    const increment = () => setIndice(prev => {

        if (prev > 7) {
            return prev = 0
        }
        else {
            return prev + 1
        }


    });
    useEffect(() => {
        setInterval(increment, 5000);

    }, [])


    useEffect(() => {
        setData(projectList)
    }, [])

    if (!data) {
        return <h2>Loading...</h2>;
    }

    console.log(data)
    let listCar = <li className="innerCarrusel">
        <img className="skill-imagen" src={array[indice].image_path} alt={array[indice].skill_name} />

    </li>;

    let dataList = <li className="innerCarrusel">
        <img className="skill-imagen" src={skillsData[indice].image_path} alt={skillsData[indice].skill_name} />

    </li>;

    return (
        <>
            <section id="grid">

                {data.map(element => (
                    <Project id={element.id} />


                ))}



            </section>
            <section id="carrusel">
                <div className="element-carrusel">
                    <h1>WEB DEVELOPMENT</h1>
                    <ul id="trending">
                        {listCar}
                    </ul>

                </div>
                <div className="element-carrusel">
                    <h1>DATA SCIENCE</h1>
                    <ul id="trending">
                        {dataList}
                    </ul>

                </div>

            </section>
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