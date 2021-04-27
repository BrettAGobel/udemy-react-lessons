import './App.css';
import React, {Component} from 'react'
import {render} from "@testing-library/react";
import Users from "./components/users/Users";
import Navbar from "./components/layout/Navbar";
import axios from "axios";



class App extends Component {

    state= {
        users: [],
        loading: false
    }

    async componentDidMount() {
        this.setState({loading: true})

        let res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`)
         console.log(res.data)
        this.setState({users: res.data, loading: false})
    }

    render() {
    return (
        <div className='App'>
          <Navbar  />
          <div className='container'><Users loading={this.state.loading} users={this.state.users}/></div>
        </div>
    );
  }

  }


export default App;
