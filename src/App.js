import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import './App.css';
import Root from './components/Root';
import HomePage from './views/Home/Home';

function App() {

  const router = createBrowserRouter(createRoutesFromElements([
    
    <Route path='/' element={<Root />} >
     
      <Route path=':type' element={<HomePage />}/>
      
  </Route>

  ]))
      
  
  return (
    <>
    <RouterProvider router={router} />
    
    </>
   
    
  );
}

export default App;
