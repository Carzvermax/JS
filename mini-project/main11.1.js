const url = new URL(location.href);
const id = url.searchParams.get('data');
let h1 = document.createElement('h1')
h1.innerText = 'User Details'
document.body.append(h1)
fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(value => value.json())
    .then(value => {
        const container = document.createElement('div')
        container.classList.add('container')
        const usersDiv = document.createElement('div')
        for (const item in value) {
            const userDiv = document.createElement('p');
            if (typeof value[item] !== 'object') {
                userDiv.innerHTML = `<em>${item}:</em> ${value[item]}`;
            } else {
                userDiv.innerHTML = `<b>${item} :</b>`
                for (const key in value[item]) {
                    const userInnerDiv = document.createElement('p');
                    if (typeof value[item][key] !== 'object') {
                        userInnerDiv.innerHTML = `<em>${key}:</em> ${value[item][key]}`;
                    } else {
                        userInnerDiv.innerHTML = `<b>${key} :</b>`;
                        for (const element in value[item][key]) {
                            const htmlDivElement = document.createElement('p');
                            if (typeof value[item][key][element] !== 'object') {
                                htmlDivElement.innerHTML = `<em>${element}:</em> ${value[item][key][element]}`;
                            }
                            userInnerDiv.append(htmlDivElement);
                        }
                    }
                    userDiv.append(userInnerDiv);
                }
            }
            usersDiv.append(userDiv);
        }
        usersDiv.classList.add('user')
        container.append(usersDiv)
        const userButton = document.createElement('button')
        userButton.innerHTML = `<b>Post of current user</b>`
        userButton.classList.add('button')
        container.append(userButton)
        userButton.onclick = function () {
          fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
              .then(value => value.json())
              .then(value => {
                  const postsDiv = document.createElement('div')
                  postsDiv.classList.add('posts')
                  for (const valueElement of value) {
                      const postDiv = document.createElement('div')
                      postDiv.classList.add('post')
                      postDiv.innerHTML = `<b>Title:</b> ${valueElement.title}`
                      const anchor = document.createElement('a');
                      anchor.innerText = `Post Details`;
                      anchor.classList.add('href')
                      postDiv.append(anchor);
                      anchor.href = `post-details.html?userId=${id}&data=${valueElement.id}`;
                      postsDiv.append(postDiv)
                      container.append(postsDiv);
                  }
              })
        }
        document.body.append(container)
    });