function render(template, data) {
	const reg = /\{\{(\w+)\}\}/
	if (reg.test(template)) {
		let msg = reg.exec(template)[1]
		template = template.replace(reg, data[msg])
		return render(template, data)
	}
	return template
}
let template = `我是{{name}},年龄{{age}},性别{{sex}}`
let person = {
	name: '张三',
	age: 20,
	sex: '男',
}
