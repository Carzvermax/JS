const url = new URL(location.href);
const postId = url.searchParams.get('data');
const userId = url.searchParams.get('userId');

fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then(value => value.json())
    .then(value => {
        const postsDiv = document.createElement('div')
        postsDiv.classList.add('post')
        const h3 = document.createElement('h3')
        h3.innerText = 'Post Information'
        h3.classList.add('head')
        document.body.append(h3)
        for (const postItem in value) {
            const postDiv = document.createElement('div');
            postDiv.innerHTML = `<b>${postItem}:</b> ${value[postItem]}`;
            postsDiv.append(postDiv)
            document.body.append(postsDiv);
        }
        const h3_1 = document.createElement('h3')
        h3_1.innerHTML = `<ew>Comments</ew>`
        h3_1.classList.add('head')
        document.body.append(h3_1)
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
            .then(value => value.json())
            .then(value => {
                const commentsDiv = document.createElement('div')
                commentsDiv.classList.add('comments')
                for (const valueElement of value) {
                    const commentDiv = document.createElement('div');
                    commentDiv.classList.add('comment')
                        commentDiv.innerHTML = `<b>Post id:</b> ${valueElement.postId} <br> <b>Coment id:</b> ${valueElement.id} <br>
                        <b>Name:</b> ${valueElement.name} <br> <b>Email:</b> ${valueElement.email} <br> <b>Body:</b> ${valueElement.body}`
                        commentsDiv.append(commentDiv)
                        document.body.append(commentsDiv);

                }
            })
            })
