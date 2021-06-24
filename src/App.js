import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Routing from './Routing';

class App extends Component {
  
  render() {
    // var num = -5;
    // var myStyle = {
    //   fontSize:35,
    //   color: 'navy'
    // }
    return (
      <div>
      <Routing/>
        {/* <h1>Hello World</h1>
        <h3>This is my root component.</h3>
        <p>{10+20}</p>
        <p>{num > 0 ? "Positive": "Not Positive"}</p>
        <p style={myStyle}>Footer Here</p> */}
        {/* SIngle LIne Comment */}
        {/* LIne 1
        Line 2
        Line 3 */}
      </div>
    );
  }
}

export default App;
