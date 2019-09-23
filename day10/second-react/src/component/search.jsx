import React, { Component } from 'react'

class search extends Component {

    // tempat menyimpan data component
    state = {
        term: ''
    }

    onSubmitFrom = (event) =>{
        // fungction yang akan mengcancel refresh
        event.preventDefault()
        // cara akses propoerti di luar class (file yang berbeda)
        this.props.onSearchSubmit(this.state.term)
    }

    render() {
        return (
            <div>
               <form className="form-group" onSubmit={this.onSubmitFrom}>
                   <input 
                        type="text" 
                        className="form-control" 
                        onChange={(event) => {this.setState({term: event.target.value})}}/>
                </form> 
            </div>
        )
    }
}

export default search
// event.target.value berisi string yang di input oleh user
// Even Headler bertugas menghendle suatu event terjadu 
    // event : onClick, onSubmit, onChange, ...
// onChange memukinkan kita untuk memanggil function ketika ada perubahan di text input 
// onSubmit memukinkan kita untuk memanggil function ketika di klik enter 

// setiap komponen memilliki tempat penyimpanan data yang namanya adalah state