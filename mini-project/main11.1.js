const url = new URL(location.href);
const id = url.searchParams.get('data');

fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(value => value.json())
    .then(value => {
        const usersDiv = document.createElement('div')
        for (const item in value) {
            const userDiv = document.createElement('div');
            if (typeof value[item] !== 'object') {
                userDiv.innerText = `${item} -- ${value[item]}`;
            } else {
                userDiv.innerText = `${item} :`
                for (const key in value[item]) {
                    const userInnerDiv = document.createElement('div');
                    if (typeof value[item][key] !== 'object') {
                        userInnerDiv.innerText = `${key} -- ${value[item][key]}`;
                    } else {
                        userInnerDiv.innerText = `${key} :`;
                        for (const element in value[item][key]) {
                            const htmlDivElement = document.createElement('div');
                            if (typeof value[item][key][element] !== 'object') {
                                htmlDivElement.innerText = `${element} -- ${value[item][key][element]}`;
                            }
                            userInnerDiv.append(htmlDivElement);
                        }
                    }
                    userDiv.append(userInnerDiv);
                }
            }
            usersDiv.append(userDiv);
        }
        document.body.append(usersDiv)
        const userButton = document.createElement('button')
        userButton.innerText = "post of current user"
        document.body.append(userButton)
        userButton.onclick = function () {
          fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
              .then(value => value.json())
              .then(value => {
                  const postsDiv = document.createElement('div')
                  for (const valueElement of value) {
                      const postDiv = document.createElement('div')
                      postDiv.innerText = `${valueElement.title}`
                      const anchor = document.createElement('a');
                      anchor.innerText = `Click me`;
                      postDiv.append(anchor);
                      anchor.href = `post-details.html?userId=${id}&data=${valueElement.id}`;
                      postsDiv.append(postDiv)
                      document.body.append(postsDiv);
                  }
              })
        }
    });