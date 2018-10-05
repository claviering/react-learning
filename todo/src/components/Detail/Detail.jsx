import React, { Component } from 'react';
import { Button, Collapse, Card, CardBody, Input, Alert } from 'reactstrap';
import { Redirect } from 'react-router-dom'
import './Detail.scss'
import { updateTodo } from '@/api/api.js';
import { deleteTodo } from '@/api/api.js';

class Detail extends Component {
  componentWillMount () {
    try {
      this.setState({curContent: this.props.location.state.content})
    } catch (err) {
    }
  }
  state = {
    curContent: '',
    collapse: false,
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
    let isDelete = window.confirm('确定要删除?')
    if (!isDelete) {
      return 
    }
    let data = {
      content: this.state.curContent
    }
    deleteTodo(data)
    .then(res => {
      if (res.data.code === 1) {
        this.toggleAlert('success', res.data.msg)
      } else {
        this.toggleAlert('danger', res.data.msg)
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
    this.setState({curContent: newContent})
    let newTodo = { 
      oldContent: this.state.curContent,
      newTitle: newTitle,
      newContent: newContent
    }
    updateTodo(newTodo)
    .then(res => {
      if (res.data.code === 1) {
        this.toggleAlert('success', res.data.msg)
      }
    })
    .catch(err => {
      console.log(err)
    })
  }
  render () {
    if (this.state.curContent === '') {
      return <Redirect to='/404' />
    }
    return (
      <div className="Detail">
        <h2>{ this.state.curContent }</h2>
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