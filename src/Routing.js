import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Link, NavLink, Redirect } from "react-router-dom";
import Route from "react-router-dom/Route";

const Home = () => {
  return (
    <div>Home Page</div>
  )
}

const About = () => {
  return (
    <div>About Page</div>
  )
}

const Contact = () => {
  return (
    <div>Contact Page</div>
  )
}

const User = (params) => {
  return (
    <div>
      <p>User Page.</p>
      <p>Hello {params.username}!!</p>
    </div>
  )
}
class Routing extends Component {
    state = {
      loggedIn: false
    };
  
    loginHandle = () => {
      this.setState(prevState => ({
        loggedIn: !prevState.loggedIn
      })     
      )
      console.log(this.state.loggedIn);
    }
    render() {
      return (
        <Router>
          <div>
            <div>
              <NavLink to="/" activeStyle={{ color: "green" }}>Home</NavLink> |
              <NavLink to="/about" activeStyle={{ color: "green" }}>About</NavLink> |
              <NavLink to="/contact" activeStyle={{ color: "green" }}>Contact</NavLink> |
              <NavLink to="/user/john" activeStyle={{ color: "green" }}>User Detail</NavLink>
              <input type="button"
                onClick={this.loginHandle.bind(this)}
                value={this.state.loggedIn ? "log out" : "log in"} />
            </div>
            <Route path="/" exact render={Home} />
            <Route path="/home" render={Home} />
            <Route path="/about" render={About} />
            <Route path="/contact" render={() => (
              this.state.loggedIn ? (<Contact />) : (<Redirect to="/" />)
            )} />
            <Route path="/user/:username" render={({ match }) => (
              this.state.loggedIn ? (<User username={match.params.username} />) : (<Redirect to="/" />)
            )} />
          </div>
        </Router>
      );
    }
  }
  
  export default Routing;