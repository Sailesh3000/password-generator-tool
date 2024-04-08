import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import Generate from './components/Generate';
import Header from './components/Header';
import React, { useState } from 'react';

function App() {
  const [mode, setMode] = useState('light');
  const toggleMode = ()=>{
    if(mode === 'dark'){
      setMode('light')
      document.body.style.backgroundColor = 'white'
      document.body.style.color = 'black'
    }
    else{
      setMode('dark'); 
      document.body.style.backgroundColor = 'black'
      document.body.style.color = 'white'
      // showAlert("Dark Mode has been enabled","success");
    }
  }
  return (
    <>
      <Header mode={mode} toggleMode={toggleMode} />
      <Generate mode={mode}/>
    </>
  )
}

export default App