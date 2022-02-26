Array.prototype.myforEach = function (callback, thisArg) {
	if (typeof callback !== 'function') throw TypeError('参数必须是一个回调')
	let _this
	if (thisArg) {
		_this = thisArg
	}
	let o = Object(this)
	let len = o.length >>> 0
	for (const k in o) {
		if (Object.hasOwnProperty.call(o, k)) {
			callback.call(_this, o[k], k, o)
		}
	}
}
