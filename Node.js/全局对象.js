// console.log(global)
// console.log(global.a)
const path = require('path')
global.a = 60 //挂载全局变量
console.log(a)
// 在node.js中执行js文件 this不是指向global  但是交互模式中(即cmd模式中 this指向global)
const obj = {
	name: 'andy',
}
console.log(this) //{} 指向这个js模块
console.log(__dirname) //得到当前执行文件的绝对路径 不包括文件名
console.log(__filename) //绝对路径包括文件名
let extname = path.extname(__filename)
let parseobj = path.parse(__filename)
console.log(extname)
console.log(parseobj)
//拼接操作
let fullpath = path.join(__dirname, '全局对象.js') //在当前执行文件夹下获取这个文件的完整路径

console.log(fullpath)
