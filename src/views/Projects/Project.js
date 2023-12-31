import React from "react";
import { projectList } from "../../services/projectsList";
import { Link } from "react-router-dom";
export const Project = (props) => {
    let id = Number(props.id);
    let array = projectList.filter(element => element.id === id);

    return (

        array.map(project => (


            <>
                <details className="project-details">
                    <summary className="summary-project">{project.name}</summary>


                    <p key={project.id} title="click here">

                        <strong> {project.name}</strong><br />
                        <strong> {project.skill_name}</strong><br /><br />
                        <span>{project.description}</span><br></br><br></br>
                        <span>{project.purpose}</span><br></br> <br></br>
                        <span>{project.year}</span>

                        <Link
                            key={project.id}
                            to={project.url}
                            className="link-style"

                        >
                            {project.url}

                        </Link>
                    </p>


                </details>


            </>


        ))

    )
}

