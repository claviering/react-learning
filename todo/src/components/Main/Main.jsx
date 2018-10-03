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
  store = this.props.store
  changeMain = () => {
    this.setState({ showDetail: !this.state.showDetail })
  }
  unsubscribe = this.store.subscribe(this.changeMain)

  toUrl = () => this.state.showDetail ? '/add' : '/'

  tmpTodoList = () => (<TodoList store={ this.store }></TodoList>)
  render() {
    return (
      <div className="Main">
        <Router>
          <div>
            <Switch>
              <Route exact path="/" component={ this.tmpTodoList } />
              <Route path="/add" component={ AddTodo } />
              <Route exact path="/detail/:id" component={ Detail } />
              <Route path="/404" component={ NoFind } />
              <Redirect from='*' to='/404' />
            </Switch>
            {<Link onClick={ this.changeMain } to={ this.toUrl() }><Add icon={ this.state.showDetail } /></Link>}
          </div>
        </Router>
      </div>
    );
  }
}

export default Main;