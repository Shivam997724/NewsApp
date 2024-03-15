import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './App.css';
import { Navbar } from './Components/Navbar';
import { TextForm} from './Components/TextForm';
import { useState } from 'react';
import { DarkMode } from './Components/DarkMode';
import { Alert } from './Components/Alert';
import {NavLink, Route ,Routes} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("dark");
  const [alert, setAlert] = useState(null)

  const showAlert = (message,type)=>{
    setAlert({
      msg :message,
      type:type
    })
    setTimeout(() => {
        setAlert(null)
    }, 1500);
  }
  const greenMode = ()=>{
    if (mode  === "#4C6603"){
      setMode("light");
      showAlert("light mode has been enables",'success')
      document.body.style.backgroundColor = "white"; 
    }
    else{
      setMode("#4C6603");
      document.body.style.backgroundColor = "#4C6603";
      showAlert("green mode has been enables",'success')
    }
 
  }


  const toggleMode =()=>{
    if(mode === "light"){
      setMode("dark");
      document.body.style.backgroundColor = "#352D39";
     showAlert("dark mode has been enables",'success')
     document.title= "textutils-dark"
    }
    else{
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("light mode has been enables",'success')
      document.title= "textutils-light"
    }
  }
  return (
    <div className="App">
         <Navbar title="textutils" mode={mode} greenMode={greenMode} toggleMode={toggleMode}/> 
         <Alert alert={alert}/>{/* props */}
         <div className='container my-3'>
         <Routes>
         <Route path="/home" element={ <TextForm showAlert={showAlert} heading="Enter the text to analyze below"  mode={mode}/> }/>
         <Route path="/about" element={<DarkMode mode={mode}/>}/>
         </Routes>
          </div>
         
    </div>
  );
}

export default App;
