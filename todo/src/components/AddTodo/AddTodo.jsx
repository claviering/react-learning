import React, { Component } from 'react';
import { Button, Form, FormGroup, Input, Alert } from 'reactstrap';
import './AddTodo.scss'
import { addTodoList } from '@/api/api.js';

class AddTodo extends Component {
  state = {
    isOpen: false,
    saveMsg: '',
    msgColor: 'success'
  }
  toggleAlert = () => {
    this.setState({isOpen: !this.state.isOpen})
  }
  save = () => {
    let title = document.getElementById('title').value
    let content = document.getElementById('todoText').value
    if (title.length === 0 || content.length === 0) {
      let newSate = {
        saveMsg: '输入不能为空',
        msgColor: 'danger',
        isOpen: true
      }
      this.setState(newSate)
      return
    }
    let data = {
      title,
      content
    }
    addTodoList(data)
      .then((res) => {
        let newSate = {
          saveMsg: res.data,
          msgColor: 'success',
          isOpen: true
        }
        this.setState(newSate)
      })
      .catch((err) => {
        console.log(err)
      })
  }
  render () {
    return (
      <div className="AddTodo">
        <Alert onClick={ this.toggleAlert } color={ this.state.msgColor } isOpen={ this.state.isOpen }>
          { this.state.saveMsg }
        </Alert>
        <Form>
          <FormGroup>
            <Input maxLength="10" className="input" type="text" id="title" placeholder="概述" />
            <Input maxLength="30" className="input" type="text" id="todoText" placeholder="Todo 内容" />
          </FormGroup>
        </Form>
        <Button onClick={ this.save } color="primary">保存</Button>
      </div>
    );
  }
}

export default AddTodo;