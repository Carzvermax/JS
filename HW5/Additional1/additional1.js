// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

// function min (num1, num2, num3) {
//     if (num1 < num2 && num1 < num3){
//         console.log(num1);
//     }
//     else if (num2 < num3 && num2 < num1){
//         console.log(num2);
//     }
//     else{
//         console.log(num3);
//     }
// }
// min(1, 2, -3)


// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

// function max (num1, num2, num3) {
//     if (num1 > num2 && num1 > num3){
//         console.log(num1);
//     }
//     else if (num2 > num3 && num2 > num1){
//         console.log(num2);
//     }
//     else{
//         console.log(num3);
//     }
// }
// max(1, 0, 33)

// - створити функцію яка повертає найбільше число з масиву

// const arr = [10, 2, 4, 22]
// function MaxArray (array) {
//     let max = array[0]
//     for (const item of array) {
//         if (max < item) {
//             max = item;
//         }
//     }
//     return max
// }
// console.log(MaxArray(arr));

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

// const arr = [10, 9, 10, 9]
// function avarage(array) {
//     let sum = 0
//     for (const item of array) {
//         sum += item
//     }
//     return sum/array.length
// }
// console.log(avarage(arr));

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

// function foo(){
//     // console.log(arguments);
//     let min = arguments[0];
//     let max = arguments[0];
//     for (const item of arguments) {
//         if (item > max) {
//             max = item
//         }
//         if (item < min) {
//             min = item
//         }
//     }
//     console.log(max);
//     return min;
// }
// const min = foo(2,3,4,5,6,7,8);
// console.log(min);

// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.

// function random(){
//     let arr = []
//     for (let i = 0; i < 100; i++) {
//         arr.push(Math.round(Math.random()*100))
//     }
//     console.log(arr);
// }
// random()

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.

// function randomLim(limit){
//     let arr = []
//     for (let i = 0; i < limit; i++) {
//         arr.push(Math.round(Math.random()*100))
//     }
//     console.log(arr);
// }
// randomLim(10)

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

// let arr = [1, 2, 3, 4, 5, 6]
// let arr2 = []
// function reversalArray(array) {
//     arr2.push(array[array.length - 1])
//     for (let i = 2; i-1 < array.length; i++) {
//         arr2.push(array[array.length - i])
//     }
//     console.log(arr2);
// }
// reversalArray(arr)

// - створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або конкатенує їх між собою.

// function foo(...nums) {
//     if (nums.length === 1) {
//         console.log(nums)
//     }
//     else if (nums.length === 2) {
//         let arr = []
//         let numsConcat = arr.concat(nums)
//         console.log(numsConcat) ||
//             console.log(nums[0] + nums [1])
//     }
// }
// (foo(1, 1));

// - створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     EXAMPLE:
// [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]

// function SumArray(array1,array2) {
//     let newArray = [];
//     for (let i = 0; i < array1.length; i++) {
//         newArray.push(array1[i] + array2[i]);
//     }
//     return newArray;
// }
// console.log(SumArray([1, 2, 3, 4], [2, 3, 4, 5]));

// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]

// let arr = [{name: 'Dima', age: 13}, {model: 'Camry'}]
// function key(array){
//     let array1 = []
//     for (let i = 0; i < array.length; i++) {
//     let array2 = (Object.keys(array[i]))
//         for (const item of array2) {
//             array1.push(item)
//         }
//     }
//     console.log(array1)
// }
// key(arr)

//     - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]

let arr = [{name: 'Dima', age: 13}, {model: 'Camry'}]
function key(array){
    let array1 = []
    for (let i = 0; i < array.length; i++) {
        let array2 = (Object.values(array[i]))
        for (const item of array2) {
            array1.push(item)
        }
    }
    console.log(array1)
}
key(arr)