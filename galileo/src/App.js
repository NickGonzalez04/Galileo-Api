import React, {useEffect} from 'react';
import logo from './logo.svg';
import axios from 'axios'
import './App.css';

// Components
import Login from "./components/login"
import LendingDash from "./components/LendingDash"

function App() {

  useEffect(()=> {

    axios.post('https://sandbox.galileo-ft.com/instant/v1/login',{ username:"RLfPLRtyD8cK",
    password:"Y2AQ0hEh307UzG6RxWLa" })
     .then(response => {
         console.log('here', response);
     }).catch(err => { console.log(err) })
 });
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Login />
       <LendingDash />
      </header>
    </div>
  );
}

export default App;
