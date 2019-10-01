// ACTION CREATORS 


export const sendData = (_id, _username) =>{
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
    return {
        type : "LOGOUT_SUCCESS",
    }
}
