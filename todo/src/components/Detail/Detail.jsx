import React, { Component } from 'react';
import { Button, Collapse, Card, CardBody, Input, Alert } from 'reactstrap';
import './Detail.scss'
import { updateTodo } from '@/api/api.js';
import { deleteTodo } from '@/api/api.js';

class Detail extends Component {
  state = {
    collapse: true,
    isOpen: false,
    msgColor: '',
    msg: ''
  }
  toggleAlert = (msgColor, msg) => {
    this.setState({isOpen: !this.state.isOpen, msgColor, msg})
  }
  showUpdate = () => {
    this.setState({collapse: !this.state.collapse})
  }
  deleteTodo = () => {
    let data = {
      content: this.props.location.state.content
    }
    deleteTodo(data)
    .then(res => {
      if (res.data.code === 1) {
        this.toggleAlert('success', res.data.msg)
      }
    })
    .catch(err => {
      console.log(err)
    })
  }
  updateTodo = () => {
    let newTitle = document.getElementById('addtitle').value
    let newContent = document.getElementById('addContent').value
    if (newTitle === '' || newContent === '') {
      this.toggleAlert('danger', '不能为空')
      return
    }
    let newTodo = { 
      oldContent: this.props.location.state.content,
      newTitle: newTitle,
      newContent: newContent
    }
    console.log(newTodo);
    updateTodo(newTodo)
    .then(res => {
      if (res.data.code === 1) {
        this.toggleAlert('success', res.data.msg)
      }
      console.log(res)
    })
    .catch(err => {
      console.log(err)
    })
  }
  render () {
    var data = this.props.location.state;
    return (
      <div className="Detail">
        <h2>{data.content}</h2>
        <div className="operTypeBox">
          <Button color="primary" onClick={this.showUpdate}>修改</Button>
          <Button onClick={this.deleteTodo} color="danger">删除</Button>
        </div>
        <Collapse isOpen={this.state.collapse}>
          <Card className="noBorder">
            <CardBody className="inputBox">
              <Input maxLength="10" className="input" type="text" id="addtitle" placeholder="概述" />
              <Input maxLength="30" className="input" type="text" id="addContent" placeholder="Todo 内容" />
              <Button color="success" onClick={this.updateTodo}>提交</Button>
            </CardBody>
          </Card>
        </Collapse>
        <Alert onClick={ () => this.toggleAlert('danger', '不能为空') } color={ this.state.msgColor } isOpen={ this.state.isOpen }>
          { this.state.msg }
        </Alert>
      </div>
    );
  }
}

export default Detail;