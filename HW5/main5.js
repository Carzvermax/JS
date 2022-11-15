// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

// function square(a, b) {
// console.log(a * b)
// }
// square(10, 20)

// - створити функцію яка обчислює та повертає площу кола з радіусом r

// const pi = 3.14
// function squareCircle(r) {
//     console.log(pi * Math.pow(r, 2))
// }
// squareCircle(2)

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

// const pi = 3.14
// function squareCylinder(h, r) {
//     console.log(2 * pi * Math.pow(r , 2) + 2 * pi * r * h)
// }
// squareCylinder(10, 15)

// - створити функцію яка приймає масив та виводить кожен його елемент

// function returnArr(arr) {
//     for (const arrElement of arr) {
//         console.log(arrElement)
//     }
// }
// returnArr([
//     'JavaScript Complex',
//     'Java Complex',
//     'Python Complex',
//     'QA Complex',
//     'Fullstack',
//     'Frontend'
// ])

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

// function p(text) {
//     document.write(`<p>`)
//     document.write(`${text}`)
//     document.write(`</p>`)
// }
// p('Good job, man!')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// function list(text) {
//         document.write(`<ul>`)
//     document.write(`<li> ${text} </li>`);
//     document.write(`<li> ${text} </li>`);
//     document.write(`<li> ${text} </li>`);
//     document.write(`</ul>`)
// }
// list('lorem')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// function list(text, num) {
//         document.write(`<ul>`)
//     for (let i = 0; i < num; i++) {
//         document.write(`<li> ${text} </li>`)
//     }
//     document.write(`</ul>`)
// }
// list('lorem', 3)

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// function list(...arr) {
//     return arguments
// }
// console.log(list(10, 20, 30, 'xxx', true))

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

// function info(id, name, age) {
//     document.write(`<h1> ${+id} </h1>`)
//     document.write(`<h2> ${name} </h2>`)
//     document.write(`<h3> ${+age} </h3>`)
// }
// info(10, 'petya', 10)

// - створити функцію яка повертає найменьше число з масиву

// function minArr(...arr){
//     console.log(Math.min(...arr))
// }
// minArr(500, 200, 30, 40, 50, 60)

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

let sum = 0;
function count(arr) {
    for (i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    console.log(sum);
}
count([25, 40, 77, 53])