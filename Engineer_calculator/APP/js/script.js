//добавление символа
function addChar(input, character) {
			if(input.value == null || input.value == "0")
				input.value = character
			else
				input.value += character
}

//удаление символа
function deleteChar(input) {
	input.value = input.value.substring(0, input.value.length - 1)
}

//тригонометрический косинус
function cos(form) {
	form.display.value = Math.cos(form.display.value);
}

//тригонометрический синус
function sin(form) {
	form.display.value = Math.sin(form.display.value);
}

//тригонометрический тангенс
function tan(form) {
	form.display.value = Math.tan(form.display.value);
}

//квадратный корень
function sqrt(form) {
	form.display.value = Math.sqrt(form.display.value);
}

//натуральный логорифм
function ln(form) {
	form.display.value = Math.log(form.display.value);
}

//експонента
function exp(form) {
	form.display.value = Math.exp(form.display.value);
}

//изменение символа
function changeSign(input) {
	if(input.value.substring(0, 1) == "-")
		input.value = input.value.substring(1, input.value.length)
	else
		input.value = "-" + input.value
}

//вычислить
function compute(form) {
	form.display.value = eval(form.display.value)
}

//квадратная степень
function square(form) {
	form.display.value = eval(form.display.value) * eval(form.display.value)
}

//проверка валидности ввода
function checkNum(str) {
	for (var i = 0; i < str.length; i++) {
		var ch = str.substring(i, i+1)
		if (ch < "0" || ch > "9") {
			if (ch != "/" && ch != "*" && ch != "+" && ch != "-" && ch 
				!= "." && ch != "(" && ch!= ")") {
					alert("invalid entry!")
				return false
			}
		}
	}
	return true
}