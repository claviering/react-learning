import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import { ListGroup, ListGroupItem } from 'reactstrap';
import './TodoList.scss';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoId: 0,
      showDetail: true,
      collapse: false,
      todo: [
        {id: 1, title: 'title1'},
        {id: 2, title: 'title2'},
        {id: 3, title: 'title3'},
        {id: 4, title: 'title4'}
      ]
    };
  }
  toggle(id) {
    this.setState({showDetail: !this.state.showDetail})
    this.setState({todoId: id})
  }
  render () {
    let list = this.state.todo.map((item) => (
      <ListGroupItem onClick={this.toggle.bind(this, item.id)} key={item.title}>
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
      return (<Redirect to={'/detail/' + this.state.todoId} />)
    }
  }
}

export default TodoList;