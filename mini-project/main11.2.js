const url = new URL(location.href);
const postId = url.searchParams.get('data');
const userId = url.searchParams.get('userId');

fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then(value => value.json())
    .then(value => {
        const postsDiv = document.createElement('div')
        for (const postItem in value) {
            const postDiv = document.createElement('div');
            postDiv.innerText = `${postItem} -- ${value[postItem]}`;
            postsDiv.append(postDiv)
            document.body.append(postsDiv);
        }
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
            .then(value => value.json())
            .then(value => {
                const commentDiv = document.createElement('div')
                for (const valueElement of value) {
                    const commentsDiv = document.createElement('div');
                        commentsDiv.innerHTML = `Post id: ${valueElement.postId} <br> Coment id: ${valueElement.id} <br>
                        Name: ${valueElement.name} <br> Email: ${valueElement.email} <br> Body: ${valueElement.body}`
                        commentDiv.append(commentsDiv)
                        document.body.append(commentDiv);

                }
            })
            })
