import api from "../helpers/API.js"
const signup = document.getElementById("signUp")
signup.addEventListener("submit", onSignup)

function onSignup(event)
{
  event.preventDefault()
  const username = document.getElementsByName("UserName")[0].value
  const password = document.getElementsByName("MyPass")[0].value
  const email = document.getElementsByName("MyEmail")[0].value
 
  api.signup(email,password,username)
    .then((data) => {
      if(data.token) {
<<<<<<< HEAD
        sessionStorage.setItem("JWT",data.token)
        
=======
        sessionStorage.setItem("Authorization",data.token)
        window.location.href = './home.html'
>>>>>>> a2422118d175c8ff75d03010fdcd3bf60a0b0b7c
      }
      else{
        throw Error("SignUp failed")
      }
    })     
}
