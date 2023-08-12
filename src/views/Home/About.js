import React from "react";
import { useState, useEffect } from "react";
import './about.css';
import { Contact } from "../../components/contact/Contact";
import { webSkills, dataScienceSkills } from "../../services/skillsList";


export const About = () => {
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


    let listCar = <li className="innerCarrusel">
        <img className="skill-imagen" src={array[indice].image_path} alt={array[indice].skill_name} />

    </li>;

    let dataList = <li className="innerCarrusel">
        <img className="skill-imagen" src={skillsData[indice].image_path} alt={skillsData[indice].skill_name} />

    </li>;

    return (


        <div id="body-about">
            <aside>
                <Contact />
            </aside>
            <h1>
                Accountant and Software Developer
            </h1>
            <h2>A passionate of Computer Sciences and an experienced Accountant.</h2>
            <p>
                I’m a great experienced <strong>Accountant</strong>  with over 20 years of experience, I began working at an accounting firm in February 1999 and since then, I’ve worked in many companies in roles such as junior accountant, accounts payable, senior accountant, accountant, and tax advisor.
            </p>

            <p>
                Since 2018 I decided to retake my passion, <strong>Computer Sciences</strong>, within the last 5 years I have been getting skills in this field that allows me to develop some personal projects as well as work projects.
                My goal is to develop applications that bridge the gap between business and technology. I have been taking courses and acquiring knowledge to achieve this aim. By doing so, I hope to create technology solutions that can meet the clients’ business needs.
            </p>
            <p>
                I am currently focused on <strong>Data Science</strong> where I am performing data analysis to gain knowledge and skills in this area.
            </p>

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


        </div>


    )
}