import api from "../helpers/API.js"
const login = document.getElementById("logIn")
login.addEventListener("submit", onLogIn)

function onLogIn(event)
{
  event.preventDefault()
  const password = document.getElementsByName("MyPass")[0].value
  const email = document.getElementsByName("MyEmail")[0].value

  api.login(email,password)
   .then((data) => {
    console.log(data)    
    if(data.token)
        {
          api.setJWT(data.token)
          window.location.href = "../index.html"
        }
        else{
          throw Error("Login failed")
        }
      })
      
}