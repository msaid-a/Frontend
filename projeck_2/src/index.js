import React from 'react'
import ReactDOM from 'react-dom'
import App from './component/App'
import 'bootstrap/dist/css/bootstrap.min.css'
// Membuat store dengan menggunakan reducers yang sudah di buat  
import { createStore, applyMiddleware } from 'redux'
// Provider, memberi akses komponen APP agar bisa di akess semua child
import { Provider } from 'react-redux'
// import {thunk} from 'redux-thunk'
import thunk from 'redux-thunk'
import reducers from './reducers'

let _store = createStore(reducers, applyMiddleware(thunk))

ReactDOM.render(
    <Provider store={_store}>
        <App /> 
    </Provider>,
    document.getElementById('root')
)

// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()