import React, {useState} from "react";
import logo from './logo.svg';
import './App.css';
import ResponsiveAppBar from './components/Navbar';
import {Route, Link, Routes} from "react-dom";
import { Register } from './components/Register';
import { Login } from './components/Login';

function App() {
  const [currentForm, setCurrentForm] = useState('login')

  const toggleForm = (formName) => {
    setCurrentForm(formName)
  }
  return (
    <div className='app'>
      <div id="navbarOnPage">
      <ResponsiveAppBar/>
      </div>
      {/* <div className="formsOnThePage">
      {
        currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm}/>
      }
      </div> */}
  </div>
  );
}

export default App;
