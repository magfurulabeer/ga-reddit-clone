showAppropriateNav()

// Not quite sure if this works as expected
window.addEventListener('storage', () => showAppropriateNav())

function showAppropriateNav() {
  if (sessionStorage.getItem('Authorization')) {
    if (document.getElementById('login-button')) {
      const username = sessionStorage.getItem('username')
      document.getElementById('login-button').remove()
  
      let profileButton = document.createElement('a')
      profileButton.setAttribute('href', '#')
      profileButton.addEventListener('click', () => {
          sessionStorage.clear()
          window.location.href = window.location.href
      })
  
      let profileImage = document.createElement('img')
      profileImage.classList.add('profile-image')
      profileImage.setAttribute('src', `https://api.adorable.io/avatars/20/${username}.png`)
  
      profileButton.appendChild(profileImage)
      document.getElementsByTagName('nav')[0].appendChild(profileButton)
      document.getElementById('create-post-button').setAttribute('style', 'visibility: visible')

    }
  } else {
    document.getElementById('create-post-button').setAttribute('style', 'visibility: hidden')
  }
}