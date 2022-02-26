function currying(fn) {
	let juge = (...args) => {
		if (args.length === fn.length) return fn(args)
		return (...arg) => {
			juge(...arg.concat(args))
		}
	}
	return juge
}
