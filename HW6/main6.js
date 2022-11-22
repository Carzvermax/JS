// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let str1 = 'hello world'
// console.log(str1.length);
//
// let str2 = 'lorem ipsum'
// console.log(str2.length);
//
// let str3 = 'javascript is cool'
// console.log(str3.length);

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let str1 = 'hello world'
// console.log(str1.toUpperCase());
//
// let str2 = 'lorem ipsum'
// console.log(str2.toUpperCase());
//
// let str3 = 'javascript is cool'
// console.log(str3.toUpperCase());

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

// let str1 = 'HELLO WORLD'
// console.log(str1.toLowerCase());
//
// let str2 = 'LOREM IPSUM'
// console.log(str2.toLowerCase());
//
// let str3 = 'JAVASCRIPT IS COOL'
// console.log(str3.toLowerCase());

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

// let str = ' dirty string   '
// console.log(str.trim());

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

// let str = 'Ревуть воли як ясла повні';
// function stringToarray(str) {
//     let arr = str.split(' ')
//     return arr
// }
// console.log(stringToarray(str));

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

// let arr = [10,8,-7,55,987,-1011,0,1050,0]
// let map = arr.map((value) =>(value.toString()))
// console.log(map)

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

// let nums = [11,21,3]
// function sortNums(nums, direction) {
//     if (direction === 'ascending') {
//         let ascending = nums.sort((num1, num2) => {
//             return num1 - num2
//         })
//         console.log(ascending);
//     }
//     else if (direction === 'descending') {
//         let descending = nums.sort((num1, num2) => {
//             return num2 - num1
//         })
//         console.log(descending);
//     }}
// sortNums(nums, 'descending')


// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration

// let sort = coursesAndDurationArray.sort((u1, u2) => {
//     return u2.monthDuration - u1.monthDuration;
// });
// console.log(sort);

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

// function filter(array, predicateFn) {
//     let filterArr = [];
//     for (const item of array) {
//         if (predicateFn(item)) {
//             filterArr.push(item);
//         }
//     }
//     return filterArr;
// }
// console.log(filter(coursesAndDurationArray, (value) => value.monthDuration > 5));

// описати колоду карт

const cardSuit = ['spade', 'diamond', 'heart', 'clubs'];
const value = ['6', '7', '8', '9', '10', 'ace', 'jack', 'queen', 'king', 'joker'];
const color = ['red', 'black'];
let cards = [];
for (const itemSuit of cardSuit) {
    for (const itemValue of value) {
        if (itemSuit === 'spade' && itemValue !== 'joker' || itemSuit === 'clubs' && itemValue !== 'joker') {
            let cardRed = {cardSuit: itemSuit, value: itemValue, color: color[1]};
            cards.push(cardRed);
        } else if (itemSuit === 'diamond' && itemValue !== 'joker' ||  itemSuit === 'heart' && itemValue !== 'joker') {
            let cardBlack = {cardSuit: itemSuit, value: itemValue, color: color[0]};
            cards.push(cardBlack);
        }
    }
}
cards.push({value: 'joker', color: color[0]});
cards.push({value: 'joker', color: color[1]});
// console.log(cards);

// - знайти піковий туз

// let spadeAce = cards.filter((value) => {
//     return value.cardSuit === 'spade' && value.value === 'ace'
// })
// console.log(spadeAce)

// - всі шістки

// let all6 = cards.filter((value) => value.value === '6')
// console.log(all6)

// - всі червоні карти

// let allRed = cards.filter((value) => value.color === 'red')
// console.log(allRed)

// - всі буби

// let allDiamond = cards.filter((value) => value.cardSuit === 'diamond')
// console.log(allDiamond)

// - всі трефи від 9 та більше

// let clubsFrom9 = cards.filter((value) => {
//     return value.cardSuit === 'clubs' && value.value >= '9'
// })
// console.log(clubsFrom9)

// Додатково по reduce
// Взяти описану колоду карт, та за допомоги редюсу попакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }

let reduce = cards.reduce((accumulator, card) => {
if (card.cardSuit === 'spade'){
    accumulator.spades.push(card)
}
    else if (card.cardSuit === 'diamond'){
        accumulator.diamonds.push(card)
    }
    else if (card.cardSuit === 'heart'){
        accumulator.hearts.push(card)
    }
    else if (card.cardSuit === 'clubs'){
        accumulator.clubs.push(card)
    }
    return accumulator
}, {spades: [], diamonds: [], hearts: [], clubs: []})
console.log(reduce)