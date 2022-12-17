const url = new URL(location.href);
const id = url.searchParams.get('data');

fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(value => value.json())
    .then(value => {
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
            document.body.append(userDiv);
        }
    });