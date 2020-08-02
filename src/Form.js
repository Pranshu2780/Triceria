import React, { Component } from 'react'
import './App.css';

class Form extends Component {
  
   state = {
      name: null
   }
  
   handleChange = (e) =>{
      this.setState({
         [e.target.id] : e.target.value     
      })
   }

   handleSubmit=(e)=>{
        e.preventDefault();
       
   }

   render(){
       
    return(
       
       <form onSubmit={this.handleSubmit} >
         <div>
              {/* <label htmlFor="name" >name:  </label> */}
              <input type="number" className="input" id="name"  onChange={this.handleChange} />
              <button className="btn"> Enter </button>
              {console.log("hello")}
         </div>
       </form>
      
         
    );

  }
}
export default Form;