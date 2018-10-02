import React, { Component } from 'react';
import { Button, Form, FormGroup, Input } from 'reactstrap';
import './AddTodo.scss'

class AddTodo extends Component {
  render () {
    return (
      <div className="AddTodo">
        <Form>
          <FormGroup>
            <Input type="text" name="text" id="todoText" placeholder="Todo 内容" />
          </FormGroup>
        </Form>
        <Button color="primary">保存</Button>
      </div>
    );
  }
}

export default AddTodo;