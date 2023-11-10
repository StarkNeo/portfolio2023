import React from "react";
import './about.css';
import { companiesList } from "../../services/companiesList";
import { educationList } from "../../services/educationList";
export const About = () => {
    const degrees = educationList.filter(e => e.id < 4);
    const courses = educationList.filter(e => e.id > 4);


    return (

        <>

            <div id="body-about">
                <section id="div-left">
                    <details>
                        <summary className="summary-head">Work Expedient</summary>
                        <ul>
                            {companiesList.map(company => (
                                <details key={company.id}>
                                    <summary className="summary-subcat">{company.Company}| {company.location} |{company.period}</summary>
                                    <p>{company.Position}</p>
                                    <p>{company.description}</p>
                                    <ul>
                                        {company.core_activities.map(act => (
                                            <li>{act}</li>
                                        ))}
                                    </ul>

                                </details>

                            ))}</ul>
                    </details>

                </section>
                <section id="div-center">
                    <details>
                        <summary className="summary-head">Me</summary>
                        <h1 id="h1-about">Software Developer</h1>
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
                    </details>

                </section>

                <section id="div-right">
                    <details>
                        <summary className="summary-head">Education Expedient</summary>
                        <details>
                        <summary className="summary-subcat">Degrees</summary>
                        {degrees.map(title => (
                            <details key={title.id}>
                                <summary className="summary-title">{title.title}| {title.location} |{title.date}</summary>
                                <p>School: {title.academic_school}</p>
                                <p>Certificate: {title.certificate_number}</p>
                                
                            </details>

                        ))}
                        </details>                       
                        
                        <details>
                        <summary className="summary-subcat">Courses</summary>
                        {courses.map(title => (
                            <details key={title.id}>
                                <summary className="summary-title">{title.title}| {title.location} |{title.date}</summary>
                                <p>School: {title.academic_school}</p>
                                {title.certificate_number === 'path'?<img className="course-path" src={title.path} alt="QR image or certificate" />:<p>Certificate: {title.certificate_number}</p>}
                                
                                
                            </details>

                        ))}
                        </details>
                        
                        
                    </details>
                </section>



            </div>
            {/* 
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

            </section>*/}
        </>
    )

}