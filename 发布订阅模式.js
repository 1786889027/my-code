class EventEmitter {
	constructor() {
		this.events = []
	}
	on(name, fn) {
		if (!this.events[name]) this.events[name] = []
		this.events[name].push(fn)
	}
	off(name, fn) {
		if (!this.events[name]) return
		this.events = this.events.filter((item) => {
			return item !== fn
		})
	}
	emit(name, once = false, ...rest) {
		if (!this.events[name]) return
		let task = this.events[name].slice()
		for (let fn of task) {
			fn(...rest)
		}
		if (once) delete this.events[name]
	}
}
