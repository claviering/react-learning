import React, { Component } from 'react';
import { BrowserRouter } from "react-router-dom";
import App from '@/App.js';
import { store } from '../redux/store';

class Router extends Component {
  render () {
    return (
      <div>
        <BrowserRouter>
          <App store={ store }></App>
        </BrowserRouter>
      </div>
    );
  }
}

export default Router;
