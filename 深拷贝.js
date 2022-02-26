function deepclone(src, map = new WeakMap()) {
	if (src == null) return src
	if (src instanceof Date) return new Date(src)
	if (src instanceof RegExp) return new RegExp(src)
	if (typeof src !== 'object') return src
	if (map.get(src)) return map.get(src)
	let target = new src.constructor()
	map.set(src, target)
	for (const k in src) {
		if (Object.hasOwnProperty.call(src, k)) {
			target[k] = deepclone(src[k], map)
		}
	}
	return target
}
