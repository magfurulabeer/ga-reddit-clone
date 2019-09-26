
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
  fetch("http://thesi.generalassemb.ly:8080/signup", {
    method : "post",
    headers: {"Content-Type" : "application/json"},
    body : JSON.stringify({
      username,
      password,
      email
    })
  })
  .then((response) => {
    console.log(response)
    return response.json() 
  })
  
  .then((data) => {
        if(data.token)
        {
          sessionStorage.setItem("JWT",data.token)
        }
        else{
          throw Error("SignUp failed")
        }
      })
      
}