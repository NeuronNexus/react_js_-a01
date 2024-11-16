import React, { useState } from 'react';
import './App.css';
import Navbar from './component/Navbar';
import Textform from './component/Textform';
import Notify from './component/Notify'
// import Ssps from './component/Ssps';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom";
import About from './component/About';


function App() {
  const [mode,setmode] = useState('light');
  const [modeN,setmodeN] = useState('info');
  const [alert, setAlert] = useState(null);

  const showc= (message, type)=>{
        setAlert({
          msg:message,
          type:type
        })
        setTimeout(() => {
          setAlert(null);
        }, 2000);
  }
  
  const changer = ()=>{
    if(mode==='light' && modeN==='info'){
      setmode('dark');
      setmodeN('dark');
      document.body.style.backgroundColor ="rgb(29, 37, 59)";
      document.body.style.color ="white";
      showc("Dark mode acctivated", "success");
    }else{
      setmode('light');
      setmodeN('info')
      document.body.style.backgroundColor ="white";
      document.body.style.color ="black";
      showc("Light mode acctivated", "success");
    }
  }
  return(
    <> 
    <Router>
      <Navbar title="nNexus"  home="Home" changer_Prop={changer} modeN={modeN}/> 
      <Notify alert={alert}/>
      <div className="container" >
      <Routes>
            <Route path="/About" element={<About />} /> {/* Use element prop with Ssps */}
            <Route path="/" element={<Textform header="Enter Your Text Here" mode={mode} showc={showc} />} />
      </Routes>
        </div>
        </Router>
    </>
  );
}

export default App;
