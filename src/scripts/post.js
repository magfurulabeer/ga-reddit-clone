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
//let parsePost = JSON.parse(allPost)
console.log(allPost)
const createComment = document.getElementById("commentForm")
    createComment.addEventListener("submit",commentMake)

function commentMake(event)
{
    event.preventDefault()
    
    /*let discription = document.getElementById("discription").value
    api.createComment(title,discription)
    .then((data) => {
        window.location.href= "../index.html"
    })*/
    
}
