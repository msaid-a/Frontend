import React, { Component } from 'react'

class Login extends Component {
    render() {
        return (
            <div className="card">
                <div className='card-body'>
                    <div className='border-bottom border-secondary card-tittle'>
                    <h1>Login</h1>
                    </div>
                    <form action="">
                        <div>
                            <h4>Username</h4>
                        </div>
                        <input type="text" name="username" id=""/>
                        <div>
                            <h4>Password</h4>
                        </div>
                        <input type="password" name="password" id=""/>
                    </form>
                </div>
            </div>
        )
    }
}

export default Login
