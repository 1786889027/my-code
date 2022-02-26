function throttle(fn, wait, immediate) {
	let timer
	let callNow
	return function () {
		let context = this
		let args = arguments
		if (immediate) {
			callNow = !timer
			timer = setTimeout(() => {
				timer = null
			}, wait)
			if (callNow) fn.apply(context, args)
		} else {
			if (!timer) {
				setTimeout(() => {
					fn.apply(context, args)
					timer = null
				}, wait)
			}
		}
	}
}
