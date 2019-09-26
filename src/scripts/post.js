import api from "../helpers/API.js"

api.listAllPosts()
   .then((data) => {
    let posts    
    if(data.length > 10)
    {
        posts = data.slice(data.length - 10, data.length)
    }
    else{
        posts = data
    }
     console.log(posts)
    for( let i = posts.length - 1; i >=0; i-- )
     {
        console.log(posts[i])

        let post = document.createElement("a")

        let title = document.createElement("h3")
        let description = document.createElement("p")

        // Change this to go to post.html
        post.setAttribute('href', '#')
        post.classList.add('post-container')
        title.classList.add('post-title')
        description.classList.add('post-description')
        
        title.textContent = `${posts[i].title}`
        description.textContent = `${posts[i].description}`
        
        post.appendChild(title)
        post.appendChild(description)

        // post.textContent = `${posts[i].title}`
        document.getElementById("postContainer").appendChild(post)
     }
})