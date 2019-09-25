import Pup from './Pup.js'

class API {
  constructor(baseURL) {
    this.pup = new Pup(baseURL)
  }

  setJWT(token) {
    sessionStorage.setItem('Authorization', `Bearer ${token}`)
    this.pup.getToken = sessionStorage.getItem.bind(null, 'Authorization')
  }

  clearJWT() {
    sessionStorage.removeItem('Authorization')
    this.pup.getToken = null
  }
}

const api = new API('http://thesi.generalassemb.ly:8080')

/*
**  BODY
**  {
**	  "email" : "tester@superhero.com",
**	  "password" : "asdfhhjj",
**	  "username" : "wonderwoman"
**  }
**
** RESPONSE
**  {
**    "token": "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0ZXN0c2RlckBzdXBlcmhlcm8uY29tIiwiZXhwIjoxNTY5NDUxNjMxLCJpYXQiOjE1Njk0MzM2MzF9.50d8VMMggDBuDGmiQc7on9CZnZ3Sj6qiLA1x19v2L2LiqbmSByqDHHXAuf10wq6nKtuPrL7ymKu4Rb8_Eesbqg"
**  } 
*/
api.signup = (email, password, username) => api.pup.post('/signup').withBody({ email, password, username }).fetch()

/*
**  BODY
**  {
**    "text" : "I don't think it's the dress. I think you are born cool."
**  }
**
**  RESPONSE
**  {
**    "id": 729,
**    "text": "I don't think it's the dress. I think you are born cool.",
**    "user": {
**        "username": "wonderfwoman"
**    },
**    "post": {
**        "id": 3,
**        "title": "I am super cool!!",
**        "description": "I think it's my dress that makes me so cool.",
**        "user": {
**            "username": "wonderwoman"
**        }
**    }
**  }
*/
api.createComment = (text, postId) => api.pup.post(`/comment/${postId}`).withBody({ text }).fetch()


/*
**  BODY
**  {
**  	"title" : "I am super cool!!",
**  	"description" : "I think it's my dress that makes me so cool."
**  }
**
**  RESPONSE
**  {
**      "id": 1663,
**      "title": "I am super cool!!",
**      "description": "I think it's my dress that makes me so cool.",
**      "user": {
**          "username": "theflash"
**      }
**  }
*/
api.createPost = (title, description) => api.pup.post('/post').withBody({ title, description }).fetch()


/*
**  BODY
**  {
**  	"additionalEmail" : "wonderwoman@amazon.com",
**  	"mobile" : "000-000-0000",
**  	"address" : "Amazon"
**  }
**
**  RESPONSE
**  {
**      "id": 133,
**      "additionalEmail": "wonderwoman@amazon.com",
**      "mobile": "000-000-0000",
**      "address": "Amazon",
**      "user": {
**          "username": "wonderfwoman"
**      }
**  }
*/
api.createProfile = (additionalEmail, mobile, address) => 
  api.pup.post('/profile').withBody({ additionalEmail, mobile, address }).fetch()


/*
**  BODY
**  null
**
**  RESPONSE
**  [
**      {
**          "id": 3,
**          "title": "I am super cool!!",
**          "description": "I think it's my dress that makes me so cool.",
**          "user": {
**              "username": "wonderwoman"
**          }
**      }
**  ]
*/
api.listAllPosts = () => api.pup.get('/post/list').fetch()

/*
**  BODY
**  null
**
**  RESPONSE
**  [
**    {
**        "id": 6,
**        "text": "This is a comment",
**        "user": {
**            "username": "case"
**        },
**        "post": {
**            "id": 3,
**            "title": "I am super cool!!",
**            "description": "I think it's my dress that makes me so cool.",
**            "user": {
**                "username": "wonderwoman"
**            }
**        }
**    },
**  ]
*/
api.getCommentsByPostId = (postId) => api.pup.get(`post/${postId}/comment`).fetch()

/*
**  BODY
**  null
**
**  RESPONSE
**  success
*/
api.deleteCommentByCommentId = (commentId) => api.pup.delete(`comment/${commentId}`).fetch()

/*
**  BODY
**  null
**
**  RESPONSE
**  success
*/
api.deletePostByPostId = (postId) => api.pup.delete(`post/${postId}`).fetch()

/*
**  BODY
**  {
**  	"title" : "I am super cool!!",
**  	"description" : "I think it's my dress that makes me so cool."
**  }
**  RESPONSE
**  {
**      "id": 1663,
**      "title": "I am super cool!!",
**      "description": "I think it's my dress that makes me so cool.",
**      "user": {
**          "username": "theflash"
**      }
**  }
*/
api.getProfile = () => api.pup.get('/post/list').fetch()

/*
**  BODY
**  {
**	  "email" : "tester@superhero.com",
**	  "password" : "asdfhhjj",
**  }
**
** RESPONSE
**  {
**    "token": "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0ZXN0c2RlckBzdXBlcmhlcm8uY29tIiwiZXhwIjoxNTY5NDUxNjMxLCJpYXQiOjE1Njk0MzM2MzF9.50d8VMMggDBuDGmiQc7on9CZnZ3Sj6qiLA1x19v2L2LiqbmSByqDHHXAuf10wq6nKtuPrL7ymKu4Rb8_Eesbqg"
**  } 
*/
api.login = (email, password) => api.pup.post('/login').withBody({ email, password }).fetch()


/*
**  BODY
**  null
**
**  RESPONSE
**  []
*/
api.getCommentsByUser = () => api.pup.get('/user/comment').fetch()


/*
**  BODY
**  null
**
**  RESPONSE
**  [] 
*/
api.getPostsByUser = () => api.pup.get('user/post').fetch()


/*
**  BODY
**  {
**  	"mobile" : "111-111-1111"
**  }
**
** RESPONSE
**  {
**    "token": "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0ZXN0c2RlckBzdXBlcmhlcm8uY29tIiwiZXhwIjoxNTY5NDUxNjMxLCJpYXQiOjE1Njk0MzM2MzF9.50d8VMMggDBuDGmiQc7on9CZnZ3Sj6qiLA1x19v2L2LiqbmSByqDHHXAuf10wq6nKtuPrL7ymKu4Rb8_Eesbqg"
**  } 
*/
api.updateProfile = () => api.pup.post('/profile').fetch()

export default api