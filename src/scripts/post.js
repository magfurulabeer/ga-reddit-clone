import api from "../helpers/API.js"
function getQueryVariable(variable)
{
       var query = window.location.search.substring(1);
       var vars = query.split("&");
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("=");
               if(pair[0] == variable){return pair[1];}
       }
       return(false);
}
let postIndex = getQueryVariable( "postIndex")
let allPost = sessionStorage.getItem("posts")
let parsePost = JSON.parse(allPost).posts
console.log(parsePost)
let post = parsePost[postIndex]
console.log(post)
fetch(`http://thesi.generalassemb.ly:8080/post/${post.id}/comment`)
.then((response) =>{
    return response.json()
})
.then((data) =>{
    for(let comment of data)
    {
        let newComment = document.createElement("li")
        newComment.textContent = comment.text

        if (comment.user.username === sessionStorage.getItem('username')) {
            let removeButton = document.createElement("button")
            removeButton.classList.add('remove-button')
            removeButton.addEventListener('click', createEventListener(comment.id))
            newComment.appendChild(removeButton)
        }
        
        // let trashIcon = document.createElement('img')
        // trashIcon.classList.add('trash-icon')
        // trashIcon.setAttribute('src', '../assets/trash.png')
        // removeButton.appendChild(trashIcon)

        
        document.querySelector("ul").appendChild(newComment)
    }
})



displayPost()
displayCommentForm()

function displayCommentForm() {
    const createComment = document.getElementById("commentForm")
    if (sessionStorage.getItem('Authorization')) {
        createComment.addEventListener("submit",commentMake)   
    } else {
        createComment.remove()
    }
}

function displayPost() {
    document.getElementsByTagName("h1")[0].textContent = post.title
    document.getElementsByTagName("h2")[0].textContent = post.user.username
    document.getElementsByTagName("p")[0].textContent = post.description
}

function commentMake(event) {
    event.preventDefault()
    
    let discription = document.getElementById("discription").value
    api.createComment(discription,post.id)
    .then((data) => {
        window.location.href = window.location.href
    })
    
}

function createEventListener(id) {
    return function (event) {
        event.preventDefault()

        fetch(`http://thesi.generalassemb.ly:8080/comment/${id}`, {
            method: 'delete',
            headers: {
                'Authorization': sessionStorage.getItem('Authorization')
            }
        })
        .then(_ => {
            window.location.href = window.location.href
        })
        .catch(err => console.log(err)) 
    }   
}
