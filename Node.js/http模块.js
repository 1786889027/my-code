// 引入
const http = require('http')
// 配置端口号
const port = 8080
// 创建服务器
const server = http.createServer((request, response) => {
	// request请求对象 response响应对象
	// 每接收到一个请求 就执行一次这里的代码
	response.write('http:') //往响应体写内容 后面可以跟多个write 后面的拼接第一个
	response.end('hello Node.js') //end表示响应工作结束 表示一次http请求-响应结束
	//如果指定了 data，则相当于调用 response.write(data, encoding) 之后再调用 response.end(callback) 。
})
// 调用服务器对象的监听方法 让服务器监听浏览器请求
server.listen(port, (err) => {
	// console.log(err) //如果有错误就会打印 没有救underfined
	console.log(`WebSever is listening at port ${port}!`)
})
