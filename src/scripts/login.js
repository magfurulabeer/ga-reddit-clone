import api from "../helpers/API.js"

document.getElementById("log-in").addEventListener("submit", onLogIn)

function onLogIn(event) {
  event.preventDefault()
  const password = document.getElementsByName("MyPass")[0].value
  const email = document.getElementsByName("MyEmail")[0].value

  // Prepare all text fields for shake if email/password are wrong
  const errorFields = document.querySelectorAll('.error')
  for (let field of errorFields) {
    field.classList.remove('error');
  }

  api.login(email,password)
   .then((data) => {
    if(data.token) {
      api.setJWT(data.token)
      sessionStorage.setItem('username', data.username)
      window.location.href = "./home.html"
    } else {
      document.getElementsByTagName("p")[0].textContent = "Wrong Email or Password"
      const fields = document.getElementsByClassName('textfield')
      for (let field of fields) {
        field.classList.add('error');
      }
      // throw Error("Login failed")
      console.log('Login failed')
    }
  })
}