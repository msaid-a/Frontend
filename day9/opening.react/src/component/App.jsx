import React, { Component } from 'react'
import Mobil from './mobil'
import Garage from './shoot'

// mmebuat componen dengan menggunakan calss
class App extends Component {

    // Class HARUS memilki satu fungsi yaitu render
    //fungsi render hanya boleh mereturn saru element, biasanya div, tapi tidak haurs
    render() {
        return (
            <div>
                <Garage />
            </div>
        )   
    }
}
// agar dapat di gunakan di file lain, maka kita harus exporty
export default App