function Star(name, age) {
	this.name = name
	this.getName = function () {
		return this.name
	}
	this.getAge = function () {
		return age
	}
}
Star.prototype.sing = function () {
	console.log('唱歌')
}

function _new(fn, ...args) {
	var obj = Object.create(fn.prototype)
	var rel = fn.apply(obj, args)
	return rel instanceof Object ? rel : obj
}
let p = new Star('张三', 18)
console.log(p.name)
console.log(p.age)
