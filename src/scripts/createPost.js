import api from "../helpers/API.js"
const createPost = document.getElementById("userPost")
    createPost.addEventListener("submit",create)


function create(event)
{
console.log("working")   
    event.preventDefault()
    let title = document.getElementById("title")
    let discription = document.getElementById("discription")
    api.createPost(title,discription)
    .then((data) => {
        console.log(`CreateEvent: ${data}`)
        // window.location.href= "../index.html"
    
    })
    
}
