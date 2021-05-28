import './App.css';
import React, {Component, Fragment} from 'react'
import {render} from "@testing-library/react";
import Users from "./components/users/Users";
import Navbar from "./components/layout/Navbar";
import axios from "axios";
import Search from "./components/users/Search";
import Alert from "./components/layout/Alert";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import About from "./components/pages/About";


class App extends Component {

    state= {
        users: [],
        loading: false,
        alert: null

    }

    // async componentDidMount() {
    //     this.setState({loading: false})
    //
    //     // let res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`)
    //     //  console.log(res.data)
    //     // this.setState({users: res.data, loading: false})
    // }

    searchUsers =  async (text) => {
        this.setState({loading: true})
        let res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`)

        this.setState({users: res.data.items, loading: false})
    }

    //clear users from state
    clearUsers = () => {
        this.setState({users: [], loading: false})
    }

    //Set Alert
    setAlert = (msg, type) => {

            this.setState({alert: {msg: msg, type: type}})
            setTimeout(() => {this.setState({alert: null}) },3000)

    }

    render() {
    return (
        <Router>
        <div className='App'>
          <Navbar  />
          <div className='container'>
              <Alert alert={this.state.alert}/>
              <Switch>
                  <Route exact path='/' render={props => (
    <Fragment>
        <Search searchUsers={this.searchUsers}
                clearUsers={this.clearUsers}
                showClear={this.state.users.length > 0 ? true : false}
                setAlert={this.setAlert}/>
        <Users loading={this.state.loading} users={this.state.users}/>
    </Fragment>
                  )}/>
                  <Route exact path='/about' component={About}/>
              </Switch>

              </div>
        </div>
        </Router>
    )
            ;
  }

  }


export default App;
