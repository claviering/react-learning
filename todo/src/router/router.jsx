import React, { Component } from 'react';
import { BrowserRouter } from "react-router-dom";
import App from '@/App.js';
import { createStore } from 'redux';
import { change } from '../redux/reducers';
const store = createStore(change)
console.log(store)

class Router extends Component {
  render () {
    return (
      <div>
        <BrowserRouter>
          <App store={store}></App>
        </BrowserRouter>
      </div>
    );
  }
}

export default Router;
