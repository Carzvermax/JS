// В index.html
// 1 отримати масив об'єктів з endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вивести id,name всіх user в index.html. Окремий блок для кожного user.
// 3 Додати кожному блоку кнопку/посилання , при кліку на яку відбувається перехід  на сторінку user-details.html, котра має детальну інфорацію про об'єкт на який клікнули
let h1 = document.createElement('h1')
h1.innerText = 'Users'
document.body.append(h1)
const container = document.createElement('div');
container.classList.add('bodyDiv')
document.body.append(container);
fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(value => value.json())
    .then(value => {
        for (const item of value) {
            const usersDiv = document.createElement('div');
            usersDiv.innerText = `${item.id}. ${item.name}`;
            usersDiv.classList.add('user')
            container.append(usersDiv);

            const button = document.createElement('button');
            button.innerText = `User details`;
            button.classList.add('button')
            usersDiv.append(button);
            button.onclick = function () {
                document.location= `user-details.html?data=${item.id}`
                this.classList.add('btnclick')
            }
            // anchor.href = `user-details.html?data=${item.id}`;
        }
    })