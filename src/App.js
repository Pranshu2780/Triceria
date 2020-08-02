import React from 'react';
import './App.css';
import Form from './Form'
// import ScriptTag from 'react-script-tag';

class App extends React.Component {
 

  render(){
  return (
    <div className="App">
      
      {/* Navigation Bar Start */}
      
      <header>
           <div className="name"> Guessing Game </div>
           <nav className="nac">
              <ul className="navbar" >
                   <li> <a href="/#"> Home </a> </li>
                   <li> <a href="/#"> Rules </a> </li>  
              </ul>
           </nav> 
       </header>    
      
      
       <h1 className="tag" >Guess The number</h1>
       {/* Navigation Bar End */}
     
       

        <div className="output_heading">Output</div>
        <div className="output"> here </div>


          <Form />
    </div>

       
       
   );
}
}

export default App;
