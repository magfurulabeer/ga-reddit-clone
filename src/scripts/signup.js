import api from "../helpers/API.js"
const signup = document.getElementById("signUp")
signup.addEventListener("submit", onSignup)

function onSignup(event)
{
  event.preventDefault()
  const username = document.getElementsByName("UserName")[0].value
  const password = document.getElementsByName("MyPass")[0].value
  const email = document.getElementsByName("MyEmail")[0].value
  console.log(JSON.stringify({
    username,
    password,
    email
  }))
 
 api.signup(email,password,username)
   .then((data) => {
    console.log(data)    
    if(data.token)
        {
          sessionStorage.setItem("JWT",data.token)
        }
        else{
          throw Error("SignUp failed")
        }
      })
      
}