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
        let post = document.createElement("li")
        post.textContent = `${posts[i].title}`
        document.getElementById("postsList").appendChild(post)
     }
})