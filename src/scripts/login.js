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
    if(data.token) {
      api.setJWT(data.token)
      sessionStorage.setItem('username', data.username)
      const test = document.getElementsByName('bottom')
      console.log('Do we have access?\n', test)
      window.location.href = "./home.html"
    }
    else {
      throw Error("Login failed")
    }
  })
      
}