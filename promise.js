function Promise(execute) {
	this.PromiseStatus = 'pending'
	this.PromiseResult = null
	this.callbacks = []
	let self = this
	function resolve(value) {
		if (self.PromiseStatus !== 'pending') return
		self.PromiseStatus = 'fuifilled'
		self.PromiseResult = value
		setTimeout(() => {
			self.callbacks.forEach((item) => {
				item.onResolved()
			})
		})
	}
	function reject(reason) {
		if (self.PromiseStatus !== 'pending') return
		self.PromiseStatus = 'rejected'
		self.PromiseResult = reason
		setTimeout(() => {
			self.callbacks.forEach((item) => {
				item.onRejected()
			})
		})
	}
	try {
		execute(resolve, reject)
	} catch (e) {
		reject(e)
	}
}
Promise.prototype.then = function (onResolved, onRejected) {
	let self = this
	return new Promise((resolve, reject) => {
		function callback(type) {
			try {
				let result = self.PromiseResult
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
		if (self.PromiseStatus === 'fuifilled') {
			setTimeout(() => {
				callback(onResolved)
			})
		}
		if (self.PromiseStatus == 'rejected') {
			setTimeout(() => {
				callback(onRejected)
			})
		}
		if (self.PromiseStatus == 'Pending') {
			self.callbacks.push({
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
