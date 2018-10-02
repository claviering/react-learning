import React, { Component } from 'react';

class Detail extends Component {
  render () {
    return (
      <div className="Detail">
        <h2>detail page</h2>
        <h2>{this.props.match.params.id}</h2>
      </div>
    );
  }
}

export default Detail;