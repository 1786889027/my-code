const http = require('http')
const url = require('url')
const port = 8080
const baseURL = 'http://localhost:8080/'
const server = http.createServer((request, response) => {
	//获取请求对象的信息

	request.on('data', (postData) => {
		//接收的是post请求就会触发
		console.log(postData.toString())
	})
	let reqURL = request.url //请求路径
	let reqMethod = request.method //请求方式
	const url = new URL(reqURL, baseURL)
	console.log(url.searchParams.keys())
	console.log(reqURL, reqMethod) //打印 / 因为默认是http://localhost:8080/ 打印后面的这个/
	response.write('http:')
	response.end('hello Node.js')
})

server.listen(port, (err) => {
	console.log(`WebSever is listening at port ${port}!`)
})
