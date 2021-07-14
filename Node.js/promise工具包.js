const fs = require('fs')
const path = require('path')
const util = require('util')
let filePath = path.join(__dirname, 'srouces', '为学.md')
let readFilePromise = util.promisify(fs.readFile)
let p = readFilePromise(filePath)
p.then((data) => {
	console.log(data.toString())
})
