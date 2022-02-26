function myNew(fn, ...args) {
	let target = Object.create(fn.prototype)
	let rel = fn.apply(target, args)
	return rel instanceof Object ? rel : target
}
a = 1
b = 2
console.log((a = b))
