import React, { Component } from 'react';
import { Collapse, CardBody, Card, ListGroup, ListGroupItem } from 'reactstrap';
import './TodoList.scss';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }
  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }
  render () {
    return (
      <div className="TodoList">
        <ListGroup className="todoList">
          <ListGroupItem onClick={this.toggle}>todo 1</ListGroupItem>
            <Collapse isOpen={this.state.collapse}>
              <Card>
                <CardBody>
                  love
                </CardBody>
              </Card>
            </Collapse>
        </ListGroup>
      </div>
    )
  }
}

export default TodoList;