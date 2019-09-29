function createUserSection(username) {
  let userSection = document.createElement('div')
  userSection.classList.add('user-section')

  let userImage = document.createElement('img')
  userImage.setAttribute('src', `https://api.adorable.io/avatars/10/${username}.png`)
  
  let usernameTag = document.createElement('a')
  usernameTag.textContent = username

  let spacer = document.createElement('div')
  spacer.classList.add('spacer')
  
  userSection.append(userImage, usernameTag, spacer)
  return userSection
}

export default createUserSection