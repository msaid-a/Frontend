import React, { Component } from 'react'

 class Shoot extends Component {
        state = {name : '', age : null }  
        tampil = (event) =>{
            let hasil = event.target.name
            let val = event.target.value
            this.setState({[hasil] : val})
        }
        submit = (event) =>{
            event.preventDefault()
            alert(`You are Submit ${this.state.name} ${this.state.age}`)
        }
    render() {
        let header =''
            if (this.state.name){
                header = <h1>Hello {this.state.name} {this.state.age}</h1>

            }else{
                header =''
            }
        return (
            <div>
                <form>
                    {header}
                enter your name :
                <input type="text" name ='name' onChange={this.tampil}/>
                <br/>
                enter your age :
                <input type="text" name = 'age'onChange={this.tampil} id=""/>
                <button onClick={this.submit}>Submit</button>
                </form>
            </div>
        )
    }
}

export default Shoot


