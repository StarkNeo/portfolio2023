import React, { useEffect, useState } from "react";
import { NavLink} from "react-router-dom";
import { ROUTES } from "../services/ROUTES";


function Navigation() {
    const [sectionTypes, setSectionTypes] = useState([]);

    useEffect(() => {
        setSectionTypes(ROUTES);
    }, [])
    
    return (
        <>
        <nav className="navigation">
            
            <ul className="nav-links">
                {/*POR CADA ELEMENTO EN SECTIONTYPES CREA UN ELEMENTO DE LISTA CON UN LINK*/}
                
                {sectionTypes ? sectionTypes.map((element) => (
                    <li className="link" key={element.id}><NavLink to={`/${element.type}`} key={element.id} className={({ isActive }) => isActive ? 'nav-link nav-link-active' : 'nav-link'} >{element.type}</NavLink></li>
                )) : 'Loading'}
            </ul>
                    
        </nav>
        
        </>
    )
}

export default Navigation;