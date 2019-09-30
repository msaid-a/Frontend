// reducers

import { combineReducers } from 'redux'

const initState = {
    id :0,
    username: ''
}

const authReducer = (state = initState, action) =>{
    switch(action.type){
        case "LOGIN_SUCCESS":
            break;

        case "LOGOUT_SUCCESS":

            break;
        default:
            return state
    }
}

combineReducers(
    {
        auth : authReducer
    }
)


// action adalah bject yang memiliki 2 properti 
    // type : untuk menentukan reducers mana yang akan mengola 
    // payload : berisi data yang akan di olah
    // {
    //     type: "register",
    //     payload : {name: 'Steave', job : 'Jobs'}
    // }