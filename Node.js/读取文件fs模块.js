const fs = require('fs')
const path = require('path')
let filePath = path.join(__dirname, '为学.md')
//同步读取
// fs.readFileSync(文件的路径,'编码模式') 怕出错就try ... catch包住
// const content = fs.readFileSync(filePath, 'utf-8') //读取文件结束后才往下执行代码
// console.log(content)
// 异步读取 参数多了个回调函数
fs.readFile(filePath, 'utf-8', (err, data) => {
	if (err) {
		console.log(err)
		return
	}
	console.log(data) //文件内容
})
// fs.writeFile(filePath,写入内容,字符集,回调函数)  会重写文件! 不是追加 内容可以是字符串或者buffer
// fs.writeFile(filePath, '看完了,写的好!', 'utf-8', (err) => {
// 	if (err) {
// 		console.log(err)
// 		return
// 	}
// 	console.log('写入成功')
// })
//多测试了几次 发现 fs.writeFile fs.readFile哪个先执行全靠运气
// 其他常见方法
// fs.renameSync('旧文件名', '新文件名') 同步
// fs.rename()  异步
let nameFileList = fs.readdirSync(__dirname) //获取__dirname当前文件夹路径下下所有文件 以数组保存
console.log(nameFileList)
