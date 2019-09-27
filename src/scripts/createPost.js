import api from "../helpers/API.js"
const createPost = document.getElementById("userPost")
    createPost.addEventListener("submit",create)
const cancel = document.getElementById("remove")
cancel.addEventListener("click", cancelPost)


let userName = sessionStorage.getItem("username")
document.getElementsByTagName("h1")[0].textContent = userName
console.log(userName)

    function create(event)
{
    event.preventDefault()
    let title = document.getElementById("title").value
    let discription = document.getElementById("discription").value
    api.createPost(title,discription)
    .then((data) => {
        

        window.location.href= "./home.html"
    })
    
}

function cancelPost(event)

{
    event.preventDefault()
    window.location.href = "./home.html"
}