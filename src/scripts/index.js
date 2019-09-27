import api from "../helpers/API.js"

showAppropriateNavButtons()

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

    console.log(sessionStorage.getItem('Authorization'))
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
        document.getElementById("posts-container").appendChild(post)
     }
})

// document.getElementById('logout-button').addEventListener('click', () => {
//     sessionStorage.clear()
// })

function showAppropriateNavButtons() {
    if (sessionStorage.getItem('Authorization')) {
        const username = sessionStorage.getItem('username')
        document.getElementById('login-button').remove()

        let profileButton = document.createElement('a')
        profileButton.setAttribute('href', '#')
        profileButton.addEventListener('click', () => {
            sessionStorage.clear()
            window.location.href = window.location.href
        })

        let profileImage = document.createElement('img')
        profileImage.classList.add('profile-image')
        profileImage.setAttribute('src', `https://api.adorable.io/avatars/20/${username}.png`)

        profileButton.appendChild(profileImage)
        document.getElementsByTagName('nav')[0].appendChild(profileButton)
      } else {
        console.log('not logged in')
        // document.getElementById('logout-button').remove()
      } 
}