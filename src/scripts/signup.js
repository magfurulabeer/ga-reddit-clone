import api from "../helpers/API.js"

document.getElementById("sign-up").addEventListener("submit", onSignup)

function onSignup(event) {
  event.preventDefault()
  const username = document.getElementsByName("MyUserName")[0].value
  const password = document.getElementsByName("MyPass")[0].value
  const email = document.getElementsByName("MyEmail")[0].value
 
  // This could be reused instead of copied and pasted
  // Prepare all text fields for shake if email/password are wrong
  const errorFields = document.querySelectorAll('.error')
  for (let field of errorFields) {
    field.classList.remove('error');
  }
  
  api.signup(email,password,username)
    .then((data) => {
      if(data.token) {
        //sessionStorage.setItem("Authorization",data.token)
        window.location.href = './home.html'
      }
      else{
        document.getElementsByTagName("p")[0].textContent = "Invalid Input"
        const fields = document.getElementsByClassName('textfield')
        for (let field of fields) {
          field.classList.add('error');
        }
        // throw Error("Login failed")
        console.log('Login failed')
        // throw Error("SignUp failed")
      }
    })     
}
