function Promise(executor) {
	this.PromiseStatus = 'pending'
	this.PromiseResult = null
	const self = this //指向自身的self
	this.callbacks = []
	function resolve(data) {
		// console.log(this) //在调用得时候是直接在参数中调用的 this指向window
		if (self.PromiseStatus !== 'pending') return
		self.PromiseStatus = 'fulfilled'
		self.PromiseResult = data
		setTimeout(() => {
			self.callbacks.forEach((item) => {
				item.onResolved(data)
			})
		})
	}
	function reject(reason) {
		if (self.PromiseStatus !== 'pending') return
		self.PromiseStatus = 'rejected'
		self.PromiseResult = reason
		setTimeout(() => {
			self.callbacks.forEach((item) => {
				item.onRejected(reason)
			})
		})
	}
	try {
		executor(resolve, reject)
	} catch (e) {
		reject(e)
	}
}
Promise.prototype.then = function (onResolved, onRejected) {
	const self = this
	if (typeof onResolved !== 'function') {
		onResolved = (value) => value
	}
	if (typeof onRejected !== 'function') {
		onRejected = (reason) => {
			throw reason
		}
	}
	return new Promise((resolve, reject) => {
		function callback(type) {
			try {
				let result = type(self.PromiseResult)
				if (result instanceof Promise) {
					result.then(
						(v) => {
							resolve(v)
						},
						(r) => {
							reject(r)
						}
					)
				} else {
					resolve(result)
				}
			} catch (e) {
				reject(e)
			}
		}
		if (this.PromiseStatus === 'fulfilled') {
			setTimeout(() => {
				callback(onResolved)
			})
		}
		if (this.PromiseStatus === 'rejected') {
			setTimeout(() => {
				callback(onRejected)
			})
		}
		if (this.PromiseStatus === 'pending') {
			this.callbacks.push({
				onResolved: function () {
					callback(onResolved)
				},
				onRejected: function () {
					callback(onRejected)
				},
			})
		}
	})
}
Promise.prototype.catch = function (onRejected) {
	return this.then(undefined, onRejected)
}
Promise.resolve = function (value) {
	return new Promise((resolve, reject) => {
		if (value instanceof Promise) {
			value.then(
				(v) => {
					resolve(v)
				},
				(r) => {
					reject(r)
				}
			)
		} else {
			resolve(value)
		}
	})
}
Promise.reject = function (reason) {
	return new Promise((resolve, reject) => {
		reject(reason)
	})
}
