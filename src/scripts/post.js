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
        let removeButton = document.createElement("button")
        newComment.textContent = comment.text
        document.querySelector("ul").appendChild(newComment)
        newComment.appendChild(removeButton)
        
    }
})

const createComment = document.getElementById("commentForm")
createComment.addEventListener("submit",commentMake)
document.getElementsByTagName("h1")[0].textContent = post.title
document.getElementsByTagName("h2")[0].textContent = post.user.username
document.getElementsByTagName("p")[0].textContent = post.description

    function commentMake(event)
{
    event.preventDefault()
    
    let discription = document.getElementById("discription").value
    api.createComment(discription,post.id)
    .then((data) => {
        //let comment = 
        console.log(data)
       // window.location.href= "../index.html"
    })
    
}

function removeComment(event)
{
    event.preventDefault()
    if(post.user.username = newComment.username){
        api.deleteCommentById(post.id)
    }
    else{
        console.log("You're not the original commenter")
    }
    

}

