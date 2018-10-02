import React, { Component } from 'react';
import TodoList from '@/components/TodoList/TodoList.jsx';
import Add from '@/components/Add/Add.jsx';
import AddTodo from '@/components/AddTodo/AddTodo.jsx';
import Detail from '@/components/Detail/Detail.jsx';
import NoFind from '@/components/NoFind/NoFind.jsx';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";

class Main extends Component {
  constructor (props) {
    super(props)
    this.state = {
      showDetail: true 
    }
  }
  changeMain () {
    this.setState({showDetail: !this.state.showDetail})
  }
  render() {
    return (
      <div className="Main">
        <Router>
          <div>
            <Switch>
              <Route exact path="/" component={TodoList} />
              <Route path="/add" component={AddTodo} />
              <Route exact path="/detail/:id" component={Detail} />
              <Route path="/404" component={NoFind} />
              <Redirect from='*' to='/404' />
            </Switch>
            {this.state.showDetail && <Link onClick={this.changeMain.bind(this)} to='add'><Add icon="plus-circle"/></Link>}
            {!this.state.showDetail && <Link onClick={this.changeMain.bind(this)} to='/'><Add icon="arrow-back"/></Link>}
          </div>
        </Router>
      </div>
    );
  }
}

export default Main;