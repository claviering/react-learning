# api 说明

## 获取数据

请求地址: /todo

请求方式: get

返回格式:

todo: [
  { id: 0, title: 'title1', content: 'content1' },
  { id: 1, title: 'title2', content: 'content2' }
]

## 添加数据

请求地址: /todo

请求方式: post

返回格式:

todo: [
  { title: 'title1', content: 'content1' },
  { title: 'title2', content: 'content2' }
]