const http = require('http')
const path = require('path')
const fs = require('fs')
const port = 8080
function responseEnd(response, dirName, fileName) {
	let filePath = path.join(__dirname, 'assets', dirName, fileName)
	let content = fs.readFileSync(filePath)
	response.end(content)
}
const baseURL = 'http://localhost:8080/'
const server = http.createServer((request, response) => {
	let reqURL = request.url
	response.setHeader('Content-Type', 'text/html;charset=utf-8')
	response.setHeader('Access-Control-Allow-Origin', '*')
	response.setHeader('Access-Control-Allow-Methods', '*')
	response.setHeader('Access-Control-Allow-Headers', '*')
	// response.setHeader()
	if (reqURL === '/' || reqURL === '/index.html') {
		responseEnd(response, 'html', 'index.html')
	} else if (reqURL === '/detail.html') {
		responseEnd(response, 'html', 'detail.html')
	} else if (reqURL === '/login.html') {
		responseEnd(response, 'html', 'login.html')
	} else if (reqURL === '/getData_get') {
		response.end('后台发送的数据')
	} else if (reqURL === '/login_post') {
		//处理post请求
		request.on('data', (postData) => {
			console.log(JSON.parse(postData))
		})
		response.end('后台发送的数据')
	} else if (reqURL === '/test') {
		//处理post请求
		response.end('后台发送的数据:201812010417 单志强 老师徐宏宁')
	} else if (reqURL.endsWith('.css')) {
		response.setHeader('Content-Type', 'text/css;charset=utf-8')
		responseEnd(response, 'css', 'index.css')
	} else {
		response.end('404')
	}
	// response.end('<h1>hello world </h1>') //标签有了
	// 要返回html文件 就用readFile读取 然后返回
})

server.listen(port, (err) => {
	console.log(`WebSever is listening at port ${port}!`)
})
