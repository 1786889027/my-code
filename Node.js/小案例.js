//把当前目录下的所有js文件添加前缀
const fs = require('fs')
const path = require('path')

console.log(__dirname)
let fileList = fs.readdirSync(__dirname) //这个方法的同级目录是这整个工作区的目录
console.log(fileList)
// fs.renameSync('./git笔.md', './git笔记.md')
// fileList.forEach((item) => {
// 	if (item.endsWith('.js')) {
// 		fs.renameSync(item, `${item.substr(2)}`)
// 	}
// })
