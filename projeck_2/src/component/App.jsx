import React, { Component } from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import { connect } from 'react-redux'

import Login from './Login'
import Home from './Home'
import Register from './Register'
import Header from './Header'
import ManageProducts from './ManageProducts'
import DetailProducts from './DetailProducts'
import Carts from './Carts'

import {session} from '../actions/index'

export class App extends Component {
  componentDidMount(){
      // backup user dari localstorage ke redux
      let userData = JSON.parse(localStorage.getItem('userData'))
      if (userData){
        // kirim ke redux
        console.log(userData)
        this.props.session(userData)

      }
  }
  render() {
    return (
        <BrowserRouter>
              <div>
                <Header/>
                <Route path='/'  component={Home} exact/>
                <Route path='/login' component={Login} />
                <Route path='/register' component={Register} />
                <Route path='/manageproducts' component={ManageProducts} />
                <Route path='/detailproducts/:idProduk' component={DetailProducts} />
                <Route path='/carts' component={Carts} />
              </div>
        </BrowserRouter>
    )
  }
}

export default connect(null,{session})(App)
// titik 2 pada path merupakan sebuah variable yang menyimopan data
  // data pada variable dapat berubah