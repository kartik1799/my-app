import { useState } from 'react';
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {

  const [mode,setMode]=useState("light")

  const [btnText,setBtnText]=useState("Enable Dark Mode")

  const [alert,setAlert]=useState(null)

  const showAlert=(message,type)=>{
    setAlert({
      message:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

  const toggle=()=>{
    if(mode=="light")
    {
      setMode("dark")
      setBtnText("Enable Light Mode")
      document.body.style.backgroundColor="#042743"
      showAlert("Dark mode has been enabled","success")
    }
    else
    {
      setMode("light")
      setBtnText("Enable Dark Mode","success")
      document.body.style.backgroundColor="white"
      showAlert("Light mode has been enabled","success")
    }

  }


  return (
    <>
    <Router>
    <Navbar title="MyReactApp" mode={mode} toggle={toggle} btnText={btnText}/>
    <Alert alert={alert}/>
    <div className="container">
      <Routes>
          <Route exact path="/about"
            element={<About />}/>
          <Route exact path="/"
            element={<TextForm showAlert={showAlert} heading="Enter the text" mode={mode}/>}/>
      </Routes>
    </div>
    </Router>
    </>
  );
}

export default App;
