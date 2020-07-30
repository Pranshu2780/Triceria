import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      
      {/* Navigation Bar Start */}
      
      <header>
           <div className="name"> Guessing Game </div>
           <nav className="nac">
              <ul className="navbar" >
                   <li> <a href="#"> Home </a> </li>
                   <li> <a href="#"> Rules </a> </li>  
              </ul>
           </nav> 
       </header>    
      
       {/* Navigation Bar End */}
     
       <input className="input" type="text" name="entering" />
       <button className="btn" > Enter </button> 
    
    </div>
  );
}

export default App;
