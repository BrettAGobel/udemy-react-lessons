import './App.css';
import React, {Component} from 'react'
import {render} from "@testing-library/react";
import Users from "./components/users/Users";
import Navbar from "./components/layout/Navbar";




class App extends Component {


  render() {
    return (
        <div className='App'>
          <Navbar  />
          <div className='container'><Users /></div>
        </div>
    );
  }

  }


export default App;
