import React, {useEffect} from 'react';
import logo from './logo.svg';
import axios from 'axios'
import './App.css';

// Components
// import Login from "./components/login"
// import LendingDash from "./components/LendingDash"

function App() {

  useEffect(()=> {
    console.log('console log')
    axios.post('https://sandbox.galileo-ft.com/instant/v1/login',{ 
    username:"RLfPLRtyD8cK",
    password:"Y2AQ0hEh307UzG6RxWLa"
  },{ headers:{
    'Content-Type': 'application/json', 
    'Cookie': 'f5avraaaaaaaaaaaaaaaa_session_=CMGPGGGHFBDHHKCCHMOIDGBHOEAKEGBKFEDIFHLDOEFFPINMKHDCAEHOHJHLJMELLJODBFOHLHBBJIPOPLIAIOLGHBEDNDFIEDJJKENJICOHLLMNJEPJIHHAAPLKLAHG; TS012d9947=012fd6b128e3f8ef7758972c1cb20ccb8cf95899b5a9c083662d0a743b4819afa96399b8b7f53fa99aa221127090362a36e4dc2ec2'
}})
     .then(response => {
         console.log('here', response);
     }).catch(error => { console.log('error',error) })
 },[]);
 

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
        {/* <Login /> */}
       {/* <LendingDash /> */}
      </header>
    </div>
  );
}

export default App;
