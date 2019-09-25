import Pup from './Pup.js';

class API {
  constructor(baseURL) {
    this.fetch = new Pup(baseURL)
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
api.signup = (email, password, username) => api.fetch.post('/signup').withBody({ email, password, username })

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
api.createComment = (text, postId) => api.fetch.post(`/comment/${postId}`).withBody({ text }),


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
api.createPost = (title, description) => api.fetch.post('/post').withBody({ title, description }),


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
  api.fetch.post('/profile').withBody({ additionalEmail, mobile, address }),


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
api.listAllPosts = () => api.fetch.get('/post/list'),

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
api.getCommentsByPostId = (postId) => api.fetch.get(`post/${postId}/comment`),

/*
**  BODY
**  null
**
**  RESPONSE
**  success
*/
api.deleteCommentByCommentId = (commentId) => api.fetch.delete(`comment/${commentId}`),

/*
**  BODY
**  null
**
**  RESPONSE
**  success
*/
api.deletePostByPostId = (postId) => api.fetch.delete(`post/${postId}`),

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
api.getProfile = () => api.fetch.get('/post/list'),

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
api.login = (email, password) => api.fetch.post('/login').withBody({ email, password }),


/*
**  BODY
**  null
**
**  RESPONSE
**  []
*/
api.getCommentsByUser = () => api.fetch.get('/user/comment'),


/*
**  BODY
**  null
**
**  RESPONSE
**  [] 
*/
api.getPostsByUser = () => api.fetch.get('user/post'),


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
api.updateProfile = () => api.fetch.post('/profile')

export default api;