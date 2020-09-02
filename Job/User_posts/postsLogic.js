const url = 'https://jsonplaceholder.typicode.com/posts'
const userPosts = document.getElementById('all_posts')
const favoritePost = document.getElementById('favorite_posts')
const selectedPost = document.getElementById('selected_post')

async function getPosts () {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts = await response.json()
    console.log(posts)

    posts.forEach(obj => {
        const postContainer = document.createElement('article')
        postContainer.classList.add('post-style')
        postContainer.id = obj.id

        const postTitle = document.createElement('h1')
        postTitle.classList.add('post-title')
        postTitle.innerHTML = obj.title
        postContainer.appendChild(postTitle)

        const postContent = document.createElement('blockquote')
        postContent.classList.add('post-content')
        postContent.innerHTML = obj.body
        postContainer.appendChild(postContent)

        const postButton = document.createElement('button')
        postButton.classList.add('post-button')
        postContainer.appendChild(postButton)

        userPosts.appendChild(postContainer)
    })
}

getPosts()

document.addEventListener('click', function(event) {
    let target = event.target
    if (target.tagName == 'BUTTON' && target.parentNode.parentNode.id == 'all_posts'){
        let post = document.getElementById(`${target.parentNode.id}`)
        favoritePost.appendChild(post)
    } else if (target.tagName == 'BUTTON' && target.parentNode.parentNode.id == 'favorite_posts'){
        let post = document.getElementById(`${target.parentNode.id}`)
        userPosts.appendChild(post)
    } else if (target.parentNode.parentNode.id == 'all_posts' || target.parentNode.parentNode.id == 'favorite_posts'){
        let post = document.getElementById(`${target.parentNode.id}`)
        selectedPost.appendChild(post)
    }
})

