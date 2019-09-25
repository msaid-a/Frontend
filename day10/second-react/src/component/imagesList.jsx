import React, { Component } from 'react'
import './style.css'

class imagesList extends Component {
    tampil = () =>{
        let hasil = this.props.show.map(img =>{
            return (<div className="card border">
                        <img className ="border" src={img.urls.small} />
                    </div>)
        })
        return hasil
    }

    render() {
        return (
            <div className="card-columns m-0">
                {this.tampil()}
            </div>
        )
    }
}

export default imagesList
