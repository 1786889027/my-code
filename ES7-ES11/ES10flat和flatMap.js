//flat 将数组维度降低1个
const arr = [1, 2, 3, 4, [5, 6]]
console.log(arr.flat())
//如果三维呢
const arr2 = [1, 2, 3, 4, [5, 6, [7, 8, 9]]]
console.log(arr2.flat(2)) //参数为深度 三维数组深度为2

// flatMap相当于 flat和Map结合
const arr3 = [1, 2, 3, 4]
const newarr = arr3.flatMap((item) => [item * 10]) //本来用map返回一个二维数组 现在维度降低了
console.log(newarr)
