import React, { Component } from 'react';
import { BrowserRouter } from "react-router-dom";
import App from '@/App.js';

class Router extends Component {
  render () {
    return (
      <div>
        <BrowserRouter>
          <App></App>
        </BrowserRouter>
      </div>
    );
  }
}

export default Router;
