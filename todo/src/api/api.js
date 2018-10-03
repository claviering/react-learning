const axios = require('axios');
const instance = axios.create({
  baseURL: 'http://127.0.0.1:3001'
});

const url = {
  todoList: '/todo'
}

export const getTodoList = () => instance.get(url.todoList)

export const addTodoList = (data) => instance.post(url.todoList, data)