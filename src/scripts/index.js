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
    let postObject = {posts}
    let postJSON = JSON.stringify(postObject) 
    console.log("This is" + postJSON)
    let parseJSON = JSON.parse(postObject)
    console.log("That is parsed JSON: " + parseJSON)
    sessionStorage.setItem("posts",JSON.stringify(postObject))
    for( let i = posts.length - 1; i >=0; i-- )
     {
    
        let post = document.createElement("a")

        let title = document.createElement("h3")
        let description = document.createElement("p")

        // Change this to go to post.html
        post.setAttribute('href', `./pages/post.html?postIndex=${i}`)
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