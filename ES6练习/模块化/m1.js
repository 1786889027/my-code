// export let school = '尚硅谷'
var num = 10
// export function teach() {
// 	console.log('我们面向西游编程!')
// }
//我们需要暴露这个数据的时候只要在前面加上export就行
exports.num = num
// common.js规范中exports是mudule.exports的引用 文件中才有exports  交互模式下只有mudule.exports
// this指向模块导出的exports这个对象
