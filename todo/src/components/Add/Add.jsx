import React, { Component } from 'react';
import 'boxicons/css/boxicons.min.css';
import './Add.scss';

class Add extends Component {
  componentWillMount () {
    console.log(this.props)
  }
  state = {
    one: 'bx bx-plus-circle',
    two: 'bx bx-arrow-back'
  }
  showIcon = () => this.props.icon ? this.state.one : this.state.two
  render () {
    return (
      <div className="Add">
        <div className={this.showIcon()}></div>
      </div>
    );
  }
}

export default Add;