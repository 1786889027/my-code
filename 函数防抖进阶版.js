function debounce(fn, wait, immediate) {
	let timer = null
	return function () {
		let context = this
		let args = arguments
		if (timer) clearTimeout(timer)
		if (immediate) {
			let callNow = !timer
			timer = setTimeout(() => {
				timer = null
			}, wait)
			if (callNow) fn.apply(context, args)
		} else {
			setTimeout(fn.apply(context, args), wait)
		}
	}
}
