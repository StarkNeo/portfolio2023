import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { About } from '../About/About';
import { Projects } from '../Projects/Projects';
import './homestyles.css'
import { ROUTES } from '../../services/ROUTES';
import { Resources } from '../Resources/Resources';
import { Main } from '../Main/Main';

const HomePage = () => {
  const [data, setData] = useState(null);
  const { type } = useParams();

  useEffect(() => {
    setData(ROUTES);
  }
    , []);


  if (!data) {
    return <h2>Loading...</h2>;
  }

  let mainComponent = ''
  switch (type) {
    
    case "Home":
      mainComponent = <Main />
      break;
    case "Projects":
      mainComponent = <Projects />
      break;
    case "About":
      mainComponent = <About />;
      break;
    default:
      mainComponent=<Main />;
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
