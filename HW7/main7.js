// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
//
// function User(id, name, surname , email, phone) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }
// let users = []
// users.push(new User(1, 'Vasya', 'Petrov', 'petrov@gmail.com', 0504446270))
// users.push(new User(2, 'Kolya', 'Fran', 'fran@gmail.com', 0664446270))
// users.push(new User(3, 'Anu', 'Trofimova', 'trofimova@gmail.com', 0667446270))
// users.push(new User(4, 'Anton', 'Anaton', 'anaton@gmail.com', 0508246270))
// users.push(new User(5, 'Katya', 'Shnurko', 'shnurko@gmail.com', 0504896270))
// users.push(new User(6, 'Vasya', 'Kerimov', 'kerimov@gmail.com', 0504490070))
// users.push(new User(7, 'Max', 'Krasnov', 'krasnov@gmail.com', 0504400000))
// users.push(new User(8, 'Edik', 'Shutskiy', 'shutskiy@gmail.com', 0660446270))
// users.push(new User(9, 'Gena', 'Gorin', 'gorin@gmail.com', 0505555570))
// users.push(new User(10, 'Vasya', 'Petrov', 'petrov@gmail.com', 0504777770))
//
// // - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
//
// let userFilter = users.filter((value) => !(value.id % 2))
// console.log(userFilter);
//
// // - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
//
// let userSort = users.sort((a, b) => a.id - b.id);
// console.log(userSort);
//
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

// function Client(id, name, surname , email, phone, order) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
//     this.order = order
// }
// let client = []
// client.push(new Client(1, 'Vasya', 'Petrov', 'petrov@gmail.com', 0504446270, ['bater', 'bread', 'carrot', 'potato', 'onion', 'cucumber', 'tomato']))
// client.push(new Client(2, 'Kolya', 'Fran', 'fran@gmail.com', 0664446270, ['bater', 'bread', 'carrot']))
// client.push(new Client(3, 'Anu', 'Trofimova', 'trofimova@gmail.com', 0667446270,['bater', 'bread', 'carrot', 'cucumber', 'tomato']))
// client.push(new Client(4, 'Anton', 'Anaton', 'anaton@gmail.com', 0508246270, ['bater', 'bread', 'carrot', 'potato', 'onion', 'cucumber']))
// client.push(new Client(5, 'Katya', 'Shnurko', 'shnurko@gmail.com', 0504896270, ['bater', 'bread', 'carrot', 'potato', 'onion', 'tomato']))
// client.push(new Client(6, 'Vasya', 'Kerimov', 'kerimov@gmail.com', 0504490070, ['bater', 'bread', 'carrot', 'potato', 'cucumber', 'tomato']))
// client.push(new Client(7, 'Max', 'Krasnov', 'krasnov@gmail.com', 0504400000, ['bater', 'bread', 'carrot', 'onion', 'cucumber', 'tomato']))
// client.push(new Client(8, 'Edik', 'Shutskiy', 'shutskiy@gmail.com', 0660446270, ['bater', 'bread', 'potato', 'onion', 'cucumber', 'tomato']))
// client.push(new Client(9, 'Gena', 'Gorin', 'gorin@gmail.com', 0505555570, ['bater', 'carrot', 'potato', 'onion', 'cucumber', 'tomato']))
// client.push(new Client(10, 'Vasya', 'Petrov', 'petrov@gmail.com', 0504777770, ['bread', 'carrot', 'potato', 'onion', 'cucumber', 'tomato']))
// console.log(client);

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

// let clientSort = client.sort((a, b) => a.order.length - b.order.length);
// console.log(clientSort);

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// function Car(model, producer, year, maxSpeed, engineVolume) {
//     this.model = model;
//     this.producer = producer;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.engineVolume = engineVolume;
//     this.driver = 'auto-pilot'
//     this.drive = function () {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
//     }
//     this.info = function () {
//         console.log(`model - ${this.model}`)
//         console.log(`producer - ${this.producer}`)
//         console.log(`year - ${this.year}`)
//         console.log(`maxSpeed - ${this.maxSpeed}`)
//         console.log(`engineVolume - ${this.engineVolume}`)
//     }
//     this.increaseMaxSpeed = function (newSpeed) {
//         return this.maxSpeed = this.maxSpeed + newSpeed
//     }
//     this.changeYear = function (newValue) {
//         return this.year = newValue
//     }
//     this.addDriver = function (driver) {
//     return this.driver = driver
//     }
// }
//
// let car1 = new  Car('Camry', 'Toyota', 2020, 220, 2)
// console.log(car1)
// car1.drive()
// car1.info()
// car1.increaseMaxSpeed(25)
// car1.changeYear(2018)
// car1.addDriver({name: 'Vasya', age: 18})
// console.log(car1)

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// class car {
//
//     constructor(model, producer, year, maxSpeed, engineVolume) {
//         this.model = model;
//         this.producer = producer;
//         this.year = year;
//         this.maxSpeed = maxSpeed;
//         this.engineVolume = engineVolume;
//         this.driver = 'auto-pilot'
//     }
//
//     drive () { console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)}
//
//     info () {
//         console.log(`model - ${this.model}`)
//         console.log(`producer - ${this.producer}`)
//         console.log(`year - ${this.year}`)
//         console.log(`maxSpeed - ${this.maxSpeed}`)
//         console.log(`engineVolume - ${this.engineVolume}`)
//     }
//     increaseMaxSpeed (newSpeed) {
//         return this.maxSpeed = this.maxSpeed + newSpeed
//     }
//     changeYear (newValue) {
//         return this.year = newValue
//     }
//     addDriver (driver) {
//         return this.driver = driver
//     }
// }
// let car1 = new  car('Camry', 'Toyota', 2020, 220, 2)
// console.log(car1)
// car1.drive()
// car1.info()
// car1.increaseMaxSpeed(25)
// car1.changeYear(2018)
// car1.addDriver({name: 'Vasya', age: 18})
// console.log(car1)

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

function Cinderella(name, age, footSize) {
    this.name = name
    this.age = age
    this.footSize = footSize
}
let Cinderellas = []
Cinderellas.push(new Cinderella('Anna', 18, 33))
Cinderellas.push(new Cinderella('Kamila', 19, 34))
Cinderellas.push(new Cinderella('Maria', 21, 35))
Cinderellas.push(new Cinderella('Ketrin', 17, 36))
Cinderellas.push(new Cinderella('Victoria', 23, 37))
Cinderellas.push(new Cinderella('Eva', 58, 38))
Cinderellas.push(new Cinderella('Diana', 19, 39))
Cinderellas.push(new Cinderella('Sophia', 20, 40))
Cinderellas.push(new Cinderella('Afrodita', 69, 41))
Cinderellas.push(new Cinderella('Penelopa', 14, 31))
console.log(Cinderellas);
class Prince {

    constructor(name, age, findSizeSlipper) {
        this.name = name
        this.age = age
        this.findSizeSlipper = findSizeSlipper
    }
}
let prince = new Prince('Richard', 20, 36)
console.log(prince);
for (let i = 0; i < Cinderellas.length; i++) {
    if (Cinderellas[i].footSize === prince.findSizeSlipper){
        console.log(Cinderellas[i]);
    }
}