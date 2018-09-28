import React, { Component } from 'react';
import TodoList from '@/components/TodoList/TodoList.jsx';
import { BrowserRouter as Router, Route } from "react-router-dom";

const add = () => (
  <div>
    <h2>add</h2>
  </div>
);

class Main extends Component {
  render() {
    return (
      <div className="Main">
        <Router>
          <div>
            <Route exact path="/" component={TodoList} />
            <Route path="/add" component={add} />
          </div>
        </Router>
        <TodoList></TodoList>
      </div>
    );
  }
}

export default Main;