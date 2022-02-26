function parseParams(url) {
	const paramsStr = /.+\?(.+)/.exec(url)[1]
	const paramArr = paramsStr.split('&')
	let paramObj = {}
	paramArr.forEach((param) => {
		if (/=/.test(param)) {
			let [key, val] = param.split('=')
			val = decodeURIComponent(val)
			val = /^\d+$/.test(val) ? parseFloat(val) : val
			if (paramObj.hasOwnProperty(key)) {
				paramObj[key] = [].concat(paramObj[key], val)
			} else {
				paramObj[key] = val
			}
		} else {
			paramObj[key] = true
		}
	})
	return paramObj
}
console.log(parseParams('https://www.baidu.com/s?ie=utf-8&f=8&ie=utf-9'))
