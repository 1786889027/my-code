const express = require('express')
const template = require('art-template')
const router = express.Router()

//模板过滤器
// template.defaults.imports.过滤器名字 = function{code}
template.defaults.imports.timestamp = function (value) {
	return value * 100
}
// 处理请求
router.get('/:id', (req, res) => {
	//  '/'后面加一个:id 表示id变量是一个动态的参数 以此参数决定返回的内容
	//传统方式
	// let filePath = path.join(__dirname, 'view', 'register.html')
	// let content = fs.readFileSync(filePath, 'utf-8')
	// res.send(content)
	// 中间渲染方式
	console.log(req.params.id)
	// 渲染过程中插入数据
	let data = {
		num1: 20,
		num2: 30,
		user: {
			name: '张三',
			age: 18,
			email: 'dwa@daw.com',
		},
		books: ['西游记', '红楼梦', '水浒传', '三国演义'],
	}
	res.render('register', data)
})
// router.post('/register', (req, res) => {
// 	console.log(req.body) //也是直接用boby方法获取到req参数
// 	res.send('post ok!')
// 	// res.writeHead(302) //修改响应头的状态码
// 	// res.writeHead(302, { name: 'node.js' }) //添加响应头一个键值对
// 	res.redirect('/') //重定向跳转
// })

module.exports = router
