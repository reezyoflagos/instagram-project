import React, { useState } from 'react'
import Loginpage from './Components/Loginpage/Loginpage'
import Signup from './Components/Signuppage/Signup'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
const App = () => {
    const [authenticated, setAuthenticated] = useState(true)
    function authorise(){
      
      setAuthenticated(!authenticated)
    }
    
  return (<div>
  
      
         
         {authenticated ?
         <Loginpage onAuth={authorise}/>
         :
         <Signup /> 
          }
       
      
   
    </div>)
  
  
        

    
}

export default App
