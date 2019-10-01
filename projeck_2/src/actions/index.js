// ACTION CREATORS 


export const sendData = (_id, _username) =>{
    
    localStorage.setItem('userData',JSON.stringify({id:_id, username:_username}))
    
    
    // Action
    return {
        type : "LOGIN_SUCCESS",
        payload : {
            id : _id,
            username : _username
        }
    }
}

export const logoutData = (_id, _username) =>{
    // Action
    localStorage.removeItem('userData')
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