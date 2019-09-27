import React, { Component } from 'react'
import {BrowserRouter, Route} from 'react-router-dom'


import Login from './Login'
import Home from './Home'
import Register from './Register'
import Header from './Header'
import ManageProducts from './ManageProducts'

export class App extends Component {
  render() {
    return (
        <BrowserRouter>
              <div>
                <Header/>
                <Route path='/'  component={Home} exact/>
                <Route path='/login' component={Login} />
                <Route path='/register' component={Register} />
                <Route path='/manageproducts' component={ManageProducts} />
              </div>
        </BrowserRouter>
    )
  }
}

export default App
