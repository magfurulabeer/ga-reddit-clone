import api from "../helpers/API.js"
import createUserSection from '../helpers/createUserSection.js'

let postIndex = getQueryVariable( "postIndex")
let allPost = sessionStorage.getItem("posts")
let parsePost = JSON.parse(allPost).posts
let post = parsePost[postIndex]

displayPost()
displayCommentForm()

fetch(`http://thesi.generalassemb.ly:8080/post/${post.id}/comment`)
    .then((response) =>{
        return response.json()
    })
    .then((data) =>{
        for(let comment of data) {
            let commentContainer = document.createElement("div")
            commentContainer.classList.add('comment')

            let userSection = createUserSection(comment.user.username)
            let savedUsername = sessionStorage.getItem('username')
            if (savedUsername && comment.user.username === savedUsername) {
                let removeButton = document.createElement("button")
                removeButton.classList.add('remove-button')
                removeButton.addEventListener('click', createEventListener(comment.id))
                userSection.appendChild(removeButton)
            }
            commentContainer.appendChild(userSection)

            let commentText = document.createElement("p")
            commentText.textContent = comment.text        
            commentContainer.appendChild(commentText)
            
            document.querySelector(".comment-list").appendChild(commentContainer)
        }

        // Add margin only if logged in
        if(sessionStorage.getItem("Authorization")) {
            document.querySelector(".comment-list").classList.add('no-top-margin')
        }
    })

function displayCommentForm() {
    const createComment = document.getElementById("comment-form")
    if (sessionStorage.getItem('Authorization')) {
        createComment.addEventListener("submit", makeComment)   
    } else {
        createComment.remove()
    }
}

function displayPost() {
    const userSection = createUserSection(post.user.username)
    const title = document.querySelector("h1")
    const description = document.querySelector("p")

    title.textContent = post.title
    description.textContent = post.description

    document.querySelector(".main-post").insertBefore(userSection, title)
}

function makeComment(event) {
    event.preventDefault()
    
    let description = document.querySelector("textarea").value
    api.createComment(description,post.id)
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

// https://css-tricks.com/snippets/javascript/get-url-variables/
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