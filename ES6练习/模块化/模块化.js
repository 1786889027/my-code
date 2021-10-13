//模块化指将一个大的程序文件 拆分成若干个小的程序文件 然后将小文件组合起来
//优点:1.防止命名冲突  代码复用  高维护性

//es6之前模块化规范 Commonjs => Node.js  Browserify  AMD => require.js  CMD => sea.JS

//es6模块化语法 : 两个命令 1. export 命令用于规定模块的对外接口
// 2.import 命令用于输入其他模块提供的功能

//这是通用的导入方式
// 引入m1.js
// import * as m1 from './m1.js' //m1变量名(任意) 这样就能使用m1里面所有暴露的数据
// // 引入m2.js
// import * as m2 from './m2.js'
// // 引入m3.js
// import * as m3 from './m3.js'
// console.log(m1);
// m1.teach()
// console.log(m2);
// m2.findJob()
// console.log(m3);
// // 对于第三种默认暴露 由于是一种default对象 所以要这样调用里面的方法
// m3.default.change()

//接下来解构赋值形式
const m1 = require('./m1.js')
const path = require('path')
// import { school, teach } from './m1.js'
// import { school as guigu, findJob } from './m2.js' //由于school已经声明 这里用as 后面的guigu 作为别名
// import { default as m3 } from './m3.js' //默认暴露写法  不能用default 而是用as 后面的m3作为别名
// console.log(school)
// console.log(teach)
// console.log(guigu)
// console.log(findJob)
// console.log(m3)

// //简写形式 只适用于默认暴露
// import m33 from './m3.js'
console.log(m1.num)

// console.log(m33)
