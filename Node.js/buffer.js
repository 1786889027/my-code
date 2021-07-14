const buffer = require('buffer')
console.log(buffer)
let buff1 = Buffer.from([97, 98, 99]) //传入ascall码值
console.log(buff1) //<Buffer 61 62 63>   16进制
console.log(buff1.toString()) //abc
let buff2 = Buffer.from('nodejs')
console.log(buff2)
console.log(buff2.toString())
//let buff3 = BUffer.alloc([args]) 指定传入多少个参数
//buffer3.write() 往里面写
// ArrayBuffer  创建一个2进制数组缓冲区
