import "./App.css";
import AboutUs from "./Components/AboutUs";
import NavBar from "./Components/NavBar";
import TextForm from "./Components/TextForm";
import React, { useState } from 'react';
import Alert from "./Components/Alert";
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";
function App() {
  const [tmode,setMode] = useState('white');
  const [navtextcolor,setNavtextcolor]=useState('black');
  console.log(navtextcolor);
  const toggleMode = ()=>{
    if(tmode==='white' ){
      setMode('black');
      document.body.style.backgroundColor = 'black';
      document.body.style.color='white';
      setNavtextcolor('white');
      showalert('You have Enabled the Dark Mode','success');
      document.title="Text Util-Dark Mode";

    }
    
    else{
      setMode('white');
      document.body.style.backgroundColor = 'white';
      document.body.style.color='black';
      setNavtextcolor('black');

       showalert('You have Enabled the light Mode','warning');
       document.title="Text Util-Light Mode";
      
    }
  }
  const [alert,setalert]=useState(null);
  const showalert=(message,type)=>{
    setalert({
      msg:message,
      type:type
    });
    setTimeout(()=>{
      setalert(null)
    },2000);
  }
  const pallate1 = ()=>{
    if(tmode==='white'){
      setMode('#143d59');
      setNavtextcolor('#f4b41a');
      document.body.style.backgroundColor = '#f4b41a';
      document.body.style.color='black';
      showalert('You have change the Mode','success');
      document.title="Text Util-Theme Mode";

    }
    
    else{
      setMode('white');
      setNavtextcolor('black');
      document.body.style.backgroundColor = 'white';
      document.body.style.color='black';
       showalert('You have Enabled the light Mode','warning');
       document.title="Text Util-Light Mode";
    }
  }
  return (
    <>
  <Router>
      <NavBar title="Shop App" aboutText="About us" mode={tmode} toggleMode={toggleMode} pallate1={pallate1} navtextcolor={navtextcolor}/>
      <Alert alert={alert}/>
    
        <Routes>
          <Route exact path="/" element={<TextForm showalert={showalert} heading="Enter some text to analyze"/>}>
          </Route>
          <Route exact path="/About" element={<AboutUs/>}>
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
