import api from "../helpers/API.js"
import createUserSection from "../helpers/createUserSection.js"

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
    let postObject = {posts}

    sessionStorage.setItem("posts",JSON.stringify(postObject))
    for( let i = posts.length - 1; i >=0; i-- )
     {
    
        let post = document.createElement("a")
        post.setAttribute('href', `./post.html?postIndex=${i}`)
        post.classList.add('post-container')

        let userSection = createUserSection(posts[i].user.username)
        post.appendChild(userSection)

        let title = document.createElement("h3")
        title.classList.add('post-title')
        title.textContent = `${posts[i].title}`
        post.appendChild(title)

        let description = document.createElement("p")
        description.classList.add('post-description')
        description.textContent = `${posts[i].description}`
        post.appendChild(description)

        document.getElementById("posts-container").appendChild(post)
     }
})
