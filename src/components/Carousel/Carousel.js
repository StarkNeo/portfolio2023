import React from "react";
import { useState, useEffect } from "react";
import './carousel.css';
import { webSkills, dataScienceSkills } from "../../services/skillsList";

export const Carousel=()=>{
    const [skillsData, setSkillsData] = useState(dataScienceSkills);
    const [indice, setIndice] = useState(0);
    const [array, setArray] = useState(webSkills);
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
    let listCar = <li className="innerCarrusel">
        <img className="skill-imagen" src={array[indice].image_path} alt={array[indice].skill_name} />

    </li>;

    let dataList = <li className="innerCarrusel">
        <img className="skill-imagen" src={skillsData[indice].image_path} alt={skillsData[indice].skill_name} />

    </li>;
    return(
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
    )
}