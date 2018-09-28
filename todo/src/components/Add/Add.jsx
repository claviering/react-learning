import React, { Component } from 'react';
// import { BrowserRouter as Router, Link } from "react-router-dom";
import 'boxicons/css/boxicons.min.css';
import './Add.scss';

class Add extends Component {
  add () {
    console.log('add')
  }
  render() {
    return (
      <div className="Add" onClick={this.add}>
        <div className="bx bx-plus-circle"></div>
      </div>
    );
  }
}

export default Add;