export function match(template: string, check: string): boolean {
	const templateArr = template.toLowerCase().split('')
	const checkArr = check.toLowerCase().split('')


	for (let i = 0; i < templateArr.length; i++) {
			function checkStats() {
				console.log(checkArr, `Check Length: ${checkArr.length} Template Step: ${i+1}`)
			}

			if (checkArr.length > 0) {
				if (templateArr[i] !== '*' && templateArr[i]) {
						if (checkArr[0] as string === templateArr[i]) {
								checkArr.shift()
						} else {
								return false
						}
				} else {
						if (templateArr[i+1] !== checkArr[0] && templateArr[i+1] != null) {
								while (checkArr[0] != templateArr[i+1]) {
									checkArr.shift()
									if (checkArr.length <= 0) {
										return false
									}
								}
						}
				}
			} else if (templateArr[i] !== '*') {
				return false
			}
			checkStats()
	}
	return true
}

const print = console.log

const template = "*7263"
print(match(template, "--s2s7263!"))
print(match(template, "7263 "))

