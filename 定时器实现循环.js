function mySettimeout(fn, time) {
	let timer = null
	function interval() {
		fn()
		timer = setTimeout(interval, time)
	}
	interval()
	return {
		cancel: () => {
			clearTimeout(timer)
		},
	}
}
// 进阶反向实现
function mySetInterval(fn, time) {
	let timer = setInterval(() => {
		clearInterval(time)
		fn()
	}, time)
}
