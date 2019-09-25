import api from '../helpers/API.js'

let token = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0ZXN0c2RlckBzdXBlcmhlcm8uY29tIiwiZXhwIjoxNTY5NDUxNjMxLCJpYXQiOjE1Njk0MzM2MzF9.50d8VMMggDBuDGmiQc7on9CZnZ3Sj6qiLA1x19v2L2LiqbmSByqDHHXAuf10wq6nKtuPrL7ymKu4Rb8_Eesbqg'

async function st() {
  api.setJWT(token)
  let data = await api.getProfile()
  console.log('<><><><><><>')
  console.log(data)
  console.log('<><><><><><>')
}

st()