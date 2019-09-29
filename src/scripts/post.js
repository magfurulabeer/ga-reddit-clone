import api from "../helpers/API.js"
import createUserSection from '../helpers/createUserSection.js'

let postIndex = getQueryVariable( "postIndex")
let allPost = sessionStorage.getItem("posts")
let parsePost = JSON.parse(allPost).posts
let post = parsePost[postIndex]

displayPost()
displayCommentForm()

api.getCommentsByPostId(post.id)
    .then((data) =>{
        const comments = data.sort((a, b) => b.id - a.id)
        for(let comment of comments) {
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

        api.deleteCommentByCommentId(id)
        .then(_ => {
            window.location.href = window.location.href
        })
        .catch(err => {
            window.location.href = window.location.href
            console.log(err)
        }) 
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