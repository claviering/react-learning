import React, { Component } from 'react';

class Detail extends Component {
  render () {
    var data = this.props.location.state;
    return (
      <div className="Detail">
        <h2>{data.content}</h2>
      </div>
    );
  }
}

export default Detail;