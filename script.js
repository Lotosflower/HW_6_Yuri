//Задание 1. Дана строка 'aaa@bbb@ccc'. Замените все @ на ! с помощью глобального поиска и замены.
let str = 'aaa@bbb@ccc';
console.log(str.replace(/@/g, `!`));

//Задание 2. В переменной date лежит дата в формате 2025-12-31. Преобразуйте эту дату в формат 31/12/2025.

let date = '2025-12-31';
let arr = date.split('-');
let newStr = arr[2] + `-` + arr[1] + `-` + arr[0] 
console.log(newStr);
console.log(date.replace(/-/g, `/`));
//console.log(date.replace(/(2025) (12) (31)/, `$3$2$1`));*/

//console.log(arr);

//Задание 3. Дана строка «Я учу javascript!». Вырежете из нее слово «учу» и слово «javascript» тремя разными способами (через substr, substring, slice).

let str2 = `Я учу javascript!`;

console.log(str2.substring(2, 5));
console.log(str2.substring(6,16));

console.log(str2.substr(2, 4));
console.log(str2.substr(6, 10));

console.log(str2.slice(2, 5));
console.log(str2.slice(6,16));

//Задание 4. Дан массив с элементами 4, 2, 5, 19, 13, 0, 10. Найдите квадратный корень из суммы кубов его элементов. Для решения воспользуйтесь циклом for.


let arr2 = [4, 2, 5, 19, 13, 0, 10];
let sum = 0;
for (let i = 0; i < arr2.length; i++) {
sum += arr2[i] ** 3;
}
console.log(Math.sqrt(sum));

//Задание 5. Даны переменные a и b. Отнимите от a переменную b и результат присвойте переменной c. Сделайте так, чтобы в любом случае в переменную c записалось положительное значение. Проверьте работу скрипта при a и b, равных соответственно 3 и 5, 6 и 1.

let a = 3,
    b = 5,
    c = a - b;
    if(c > 0){   
       console.log(c) ;
    }else{
        console.log(Math.abs(c)) ;
    }

   //Задание 6. Выведите на экран текущую дату-время в формате 12:59:59 31.12.2014. Для решения этой задачи напишите функцию, которая будет добавлять 0 перед днями и месяцами, которые состоят из одной цифры (из 1.9.2014сделает 01.09.2014).
    
   let date2 = new Date();
function Zero(num){
	if (num > 0 && num < 10) { 
		return '0' + num;
	} else {
		return num;
	}
}

document.write(date2.getHours() + ':' + date2.getMinutes() + ':' + date2.getSeconds() + '' + Zero(date2.getDate()) + '.' + Zero(date2.getMonth() + 1) + '.' + date2.getFullYear());


