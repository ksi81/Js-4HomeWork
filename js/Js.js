
//Задача 1.
function task1() {
var taskPar =document.getElementsByTagName('p');
for (var i = 0; i < taskPar.length; i++) {
			taskPar[i].style.background = 'red';
	}
}
//Задача 2.
function task2() {
var mas = document.getElementsByTagName('img');
	for(var i = 0; i < mas.length; i++){
    mas[i].style.boxShadow = '5px 5px';
    }
   } 
//Задача 3.
function task3() {
	var ps = document.getElementsByTagName('p');
	for (var i = 0; i <= ps.length; i++) {
		ps[i].insertAdjacentHTML('beforebegin', '<span> №' + (i + 1) + '</span>');
	}
}
//Задача 4. 
window.onload = function () {
	span = document.getElementById('span');
	var count = 0; //сюда записываем текущее значение
	span.innerHTML = count; 
	document.body.onclick = function (e) {
		e = e || event;
		var target = e.target || e.srcElement;
		if (target.className == 'but') {
			count++;
			span.innerHTML = count;
			//здесь отсылаем новые данные на сервер
		}
	}
}
//Задача 5.
function task5() {
	var num = document.getElementById('num').value;
	num = parseInt(num);
	var pow = document.getElementById('power').value;
	pow = parseInt(pow);
	alert ( Math.pow(num, pow) );
}
//Задача 6
function task6() {
	var tag = document.getElementById('tag').value;
	var tag = document.getElementsByTagName(tag);
	for (var i = 0; i < tag.length; i++) {
		tag[i].style.textDecoration = 'underline';
	}
}
//Задача 7
function task7() {
	var age = document.getElementById('ageUser').value;
	age = parseInt(age);
	var p = document.getElementById('rezult');
	p.innerHTML = (age > 16) ? 'Добро пожаловать' : 'Вы ещё молоды';
}
//Задача 8
function task8(){
	var a = parseInt(document.getElementById('ageUser2').value);
	console.log(a);
	if(a <= 16){
		alert('Вы ещё молоды!');
	}
	else if (a >= 16){
		alert("Добро пожаловать!");
	}
	else {
		alert('Введите число');
	}
}
//Задача 9
function task9(){
var arr = [1, 2, 3, 4, 5, 'one','two'];
var rez = document.getElementById('rez');


function countElements(array) {
	return 'Array: ' + arr + '. length:' + array.length;
}
rez.innerHTML = countElements(arr);
}
//Задача 10
function task10() {
	var num = parseInt(document.getElementById('num10').value);
	if(num >= 10){
		return num * num;
	}
	else if (num < 7){
		return ("число меньше 7");
	}
	else{
		return num;
	}
}
document.getElementById('but').onclick = function () {
	document.getElementById('rezult10').innerHTML = task10();
}
//Задача 11
var numCpu = Math.floor((Math.random() * 11));
var attemptOut = document.getElementById('offer-out');
var attempt = 3;

function guessNumber() {
	var num = document.getElementById('inp').value;
	var out = document.getElementById('out11');
	attempt--;
	if (attempt > 0) {
		if (num == numCpu) {
			out.innerHTML = 'УГАДАЛ!';
			attemptOut.innerHTML = '';
			return;
		} else if (num > numCpu) {
			out.innerHTML = 'Нужно число меньше!';
		} else {
			out.innerHTML = 'Нужно число больше!';
		}
	} else if (attempt == 0 && num == numCpu) {
		out.innerHTML = 'УГАДАЛ!';
		attemptOut.innerHTML = '';
		return;
	} else if (attempt == 0 && num != numCpu) {
		out.innerHTML = 'НЕ УГАДАЛ!';
		attemptOut.innerHTML = '';
		return;
	} else {
		alert ('У вас закончились попытки');
		return;
	}
	attemptOut.innerHTML = 'Попыток: ' + attempt;
}




