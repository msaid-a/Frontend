import React, { Component } from 'react'
import axios from 'axios'

class Login extends Component {

    onSignInClick = () =>{
        let _username = this.username.value
        let _password = this.password.value

        // Get data
        axios.get(
            'http://localhost:2019/users', 
            {
                params:{
                    username : _username,
                    password : _password
                }
            }
        ).then((res) => {
            if(res.data.length === 0){
                console.log('Username dan password salah')
            }else{
                console.log(`Data di temukan 
                 username = ${res.data[0].username} 
                 email = ${res.data[0].email} 
                 password = ${res.data[0].password}`)
            }
        })
    }

    render() {
        return (
            <div className="card mx-auto mt-5 col-5">
                <div className='card-body'>
                    <div className='border-bottom border-secondary card-title'>
                    <h1>Login</h1>
                    </div>
                    <form className="form-group" onSubmit={event => {event.preventDefault()}}>
                        <div className="card-title">
                            <h4>Username</h4>
                        </div>
                        <input className="form-control" ref={input => {this.username = input}}type="text" name="username" id=""/>
                        <div className="card-title">
                            <h4>Password</h4>
                        </div>
                        <input className="form-control" ref={input => {this.password = input }}type="password" name="password" id=""/>
                    <button className ="btn btn-primary btn-block mt-4" onClick={this.onSignInClick}>Login</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Login
