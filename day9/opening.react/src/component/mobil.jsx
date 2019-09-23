import React, { Component } from 'react'

class Car extends Component {

state = {color : 'red',
         plat : 'D 1234 UD'}    
    render() {
        return (
            <div>
                <h1>Mobil {this.props.brand}</h1>
            </div>
        )
    }
}

export default Car
