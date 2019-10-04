import React, { Component } from 'react'
import axios from 'axios'

class DetailProducts extends Component {

    state = {
        products : []
    }

    getData = () =>{
        const id = this.props.match.params.idProduk
        axios.get('http://localhost:2020/products/' + id)
        .then(res => {
            this.setState({
                products: [res.data]
            })
        })
    }

    componentDidMount(){
        this.getData()
    }

    tampil = () =>{
        console.log(this.state.products)
        return this.state.products.map(produk => {
            return (<div className="card col-12 mt-3" key={produk.id}>
                <div className = "card-title text-center">
                    <h1>{produk.nama}</h1>
                </div>
                     <img src={produk.linkGambar} className="card-img-top" alt="..." />
                     <div className="card-body">
                         <h5 className="card-title">{produk.nama}</h5>
                         <p className="card-text">{produk.deskripsi}</p>
                         <p className="card-text">Rp. {produk.harga}</p>
                         <input type="number" className="form-control mb-2" />
                         <button className="btn btn-block btn-outline-dark">Add to Cart</button>
                     </div>
                 </div>)    

        })
    }
    render() {
        return (
            <div className="container ">
                    {this.tampil()} 
            </div>
        )
    }
}

export default DetailProducts
