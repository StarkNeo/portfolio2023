import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { About } from './About';
import { Projects } from '../Projects/Projects';
import './homestyles.css'
import { ROUTES } from '../../services/ROUTES';
import { Resources } from '../Resources/Resources';


const HomePage = () => {
  const [data, setData] = useState(null);
  const { type } = useParams();
  console.log(type);

  useEffect(() => {
    setData(ROUTES);
  }
    , []);

  console.log(data);

  if (!data) {
    return <h2>Loading...</h2>;
  }

  let mainComponent = ''
  switch (type) {
    
    case "Home":
      mainComponent = <About />
      break;
    case "Projects":
      mainComponent = <Projects />
      break;
    case "Resources":
      mainComponent = <Resources />;
      break;
    default:
      mainComponent=<About />;
      break;
  }
  //SI LA UBICACION ES HOME RETORNA OTRO COMPONENTE

  console.log(data);
  

  return (
    <>
      
      
          {mainComponent}
            
      
      
            

    </>


  );
};

export default HomePage;
