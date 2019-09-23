import React, { Component } from 'react'

class search extends Component {
    render() {
        return (
            <div>
               <form className="form-group" onSubmit={(event) =>{event.preventDefault()}}>
                   <input type="text" className="form-control" onChange={(event) => {console.log(event.target.value)}}/>
                </form> 
            </div>
        )
    }
}

export default search

// Even Headler bertugas menghendle suatu event terjadu 
    // event : onClick, onSubmit, onChange, ...
// onChange memukinkan kita untuk memanggil function ketika ada perubahan di text input 
// onSubmit memukinkan kita untuk memanggil function ketika di klik enter 