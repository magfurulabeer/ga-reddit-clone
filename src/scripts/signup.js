import api from "../helpers/API.js"

document.getElementById("sign-up").addEventListener("submit", onSignup)

function onSignup(event) {
  event.preventDefault()
  const username = document.getElementsByName("MyUserName")[0].value
  const password = document.getElementsByName("MyPass")[0].value
  const email = document.getElementsByName("MyEmail")[0].value
 
  api.signup(email,password,username)
    .then((data) => {
      if(data.token) {
        sessionStorage.setItem("Authorization",data.token)
        window.location.href = './home.html'
      }
      else{
        throw Error("SignUp failed")
      }
    })     
}
