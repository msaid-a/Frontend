import axios from 'axios'
export default axios.create({
    baseUrl :'https://api.unsplash.com/search/photos', 
    headers : {
      Authorization: 'Client-ID 5b0f90dcc3c1c83a0a27ac4f519c20caef687efa7493cee91fc26199c3304419'
    },
 
  })

 
// import axios from 'axios';

// export default axios.create({
//   baseURL: 'https://api.unsplash.com/',
//   headers: {
//     Authorization: 'Client-ID 52d5d5565994d57c3160b4296aef1be1bf8985d9265e313f0f9db7eb1145d86d'
//   }
// });