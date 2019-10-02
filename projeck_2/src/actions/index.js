// ACTION CREATORS 
import axios from 'axios'
import Swal from 'sweetalert2'


export const sendData = (_username, _password) =>{
   return (dispatch) => {

       axios.get(
           'http://localhost:2020/users', 
           {
               params:{
                   username : _username,
                   password : _password
               }
           }
       ).then((res) => {
           if(res.data.length === 0){
               Swal.fire({
                   type: 'error',
                   title: 'Sorry',
                   text: 'Username atau Password Salah!',
                   showConfirmButton:false,
                   timer:900
               })
           }else{
               let {id, username} = res.data[0]
               // kirim id dan username ke reducers
                   localStorage.setItem('userData',JSON.stringify({id, username}))
                   // Action
                   dispatch( {
                       type : "LOGIN_SUCCESS",
                       payload : {
                           id, 
                           username 
                       }
                   }
                   )
               
           }
       })
   }
    
}

export const logoutData = (_id, _username) =>{
    // Action

    // hapus data di local storage
    localStorage.removeItem('userData')
    // hapus data di redux
    return {
        type : "LOGOUT_SUCCESS",
    }
}

export const session = (userData) =>{
    return {
        type : 'LOGIN_SUCCESS',
        payload:{
            id : userData.id,
            username: userData.username
        }
    }
}
