# api 说明

后台服务器

## 启动

`node server.js`

## 获取数据

请求地址: `/todo`

请求方式: `get`

返回格式:
```js
todo: [
  { title: 'title1', content: 'content1' },
  { title: 'title2', content: 'content2' }
]
```
返回格式

`{ code: 1, msg: '获取成功', data: data}`

`{ code: 0, msg: '获取失败'}`

## 添加数据

请求地址: `/todo`

请求方式: `post`

返回格式:
```js
todo: [
  { title: 'title1', content: 'content1' },
  { title: 'title2', content: 'content2' }
]
```
返回格式

`{ code: 1, msg: '添加成功'}`

`{ code: 0, msg: '添加失败'}`
## 更新数据

请求地址: `/todo`

请求方式: `put`

请求格式:

`{ oldContent: 'oldContent', newTitle: 'newTitle', newContent: 'newContent' }`

返回格式

`{ code: 1, msg: '更新成功'}`

`{ code: 0, msg: '更新失败'}`

## 删除数据

请求地址: `/todo`

请求方式: `delete`

请求格式:

`{ content: 'content' }`

返回格式

`{ code: 1, msg: '删除成功'}`

`{ code: 0, msg: '删除失败'}`