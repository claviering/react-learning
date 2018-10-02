import React, { Component } from 'react';
import 'boxicons/css/boxicons.min.css';
import './Add.scss';

class Add extends Component {
  render () {
    return (
      <div className="Add">
        <div className={'bx bx-' + this.props.icon}></div>
      </div>
    );
  }
}

export default Add;