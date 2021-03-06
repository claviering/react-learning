import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import { ListGroup, ListGroupItem } from 'reactstrap';
import './TodoList.scss';
import * as actions from '../../redux/actions';
import { getTodoList } from '@/api/api.js';

let tmptodo = []

class TodoList extends Component {
  UNSAFE_componentWillMount () {
    getTodoList()
      .then((res) => {
        tmptodo = res.data.data
        this.setState({todo: res.data})
      })
  }
  constructor(props) {
    super(props);
    this.state = {
      todoId: 0,
      showDetail: true,
      todo: []
    };
  }
  toggle(id) {
    this.setState({showDetail: !this.state.showDetail})
    this.setState({todoId: id})
    this.props.store.dispatch(actions.go_back())
  }
  render () {
    let list = tmptodo.map((item, index) => (
      <ListGroupItem onClick={this.toggle.bind(this, index)} key={item.title}>
        <div>{item.title}</div>
      </ListGroupItem>
    ))
    if (this.state.showDetail) {
      return (
        <ListGroup>
          {list}
        </ListGroup>
      )
    } else {
      let path = {
        pathname: '/detail/' + this.state.todoId,
        state: tmptodo[this.state.todoId]
      }
      return (<Redirect to={ path } />)
    }
  }
}

export default TodoList;