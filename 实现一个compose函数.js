function fn1(x) {
	return x + 1
}
function fn2(x) {
	return x + 2
}
function fn3(x) {
	return x + 3
}
function fn4(x) {
	return x + 4
}
function compose(...fn) {
	if (!fn.length) return
	if (fn.length === 1) return fn
	return fn.reduce(
		(pre, cur) =>
			(...args) =>
				pre(cur(...args))
	)
}
let a = compose(fn1, fn2, fn3, fn4)
console.log(a(1))
