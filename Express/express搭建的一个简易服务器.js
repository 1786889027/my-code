//初始化项目 npm init -y
//安装express框架

// 引入express
const express = require('express')
// 创建express对象
const path = require('path')
const passportRouter = require(path.join(__dirname, 'routes', 'passport.js'))
const app = express()
app.use(express.static('public')) //将xxx作为静态资源的根目录 浏览器中的url路径就默认以此为根目录
app.engine('html', require('express-art-template'))
app.set('view options', {
	debug: process.env.NODE_ENV !== 'development',
})
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'html')
//body-parser已经被弃用,express内部已经实现不需要再去下载
// 直接下面两行代码配置
app.use(express.urlencoded({ extended: true })) //true为任意格式 false为字符串或者数组
app.use(express.json()) //解析json格式
function fn(req, res, next) {
	console.log('钩子函数,执行passport之前执行这个函数')
	// 比如校验是否登录 拦截功能等 一般和token一起运用 这里简单示范
	if (false) {
		res.send('未登录')
		return
	} else {
		next() //执行passport
	}
}
app.use(fn, passportRouter)

// 监听是否有请求
app.listen(3000, () => {
	console.log('Express WebServer is listen at 3000')
})
