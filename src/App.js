import React from 'react'; 
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navmain from './Components/Navmain'; 
import Grid from './Components/Grid';

function App() {
  return (
    <div className="App">
     
      <Navmain/>
      <Grid/>
    </div>
  );
}

export default App;
