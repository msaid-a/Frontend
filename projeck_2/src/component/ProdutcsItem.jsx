import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import axios from 'axios'

export class ProdutcsItem extends Component {

    // addToCart = (idProuduk,namaProduk,harga,linkGambar) =>{
       
    //    let idProduk = idProuduk
    //    let nama_produk = namaProduk
    //    let user_name  = this.props.userName
    //    let id_user = this.props.iD
    //    let price = harga
    //    let _qty = this.qty.value
    //    let gambar = linkGambar

    //     if(_qty === 0 ){
    //         _qty = 1
    //     }

    //     axios.post('http://localhost:2020/carts',
    //     {
    //         id_produk : idProduk,
    //         nama_produk : nama_produk,
    //         id_user : id_user,
    //         username : user_name,
    //         harga : price,
    //         qty : _qty,
    //         gambar : gambar

    //     }).then(res => {
    //         console.log(res.data)
    //     })
    // }

    render() {
        let {nama, deskripsi, linkGambar, harga, id} = this.props.barang
        let price = Intl.NumberFormat().format(harga).replace(/,/g, '.')
        return (
                 <div className="card col-10 col-lg-4 col-xl-3 m-5" key={id}>
                     <img src={linkGambar} className="card-img-top" alt="..." />

                     <div className="card-body">
                         <h5 className="card-title">{nama}</h5>
                         <p className="card-text">{deskripsi}</p>
                         <p className="card-text">Rp. {price}</p>
                         <input type="number" className="form-control mb-2" ref={input => {this.qty = input}}/>
                         <Link to={'/detailproducts/'+ id}><button
                             className="btn btn-block btn-outline-primary mb-1">Detail</button></Link>
                         <button className="btn btn-block btn-outline-dark" onClick={() => {this.addToCart(id,nama,harga,linkGambar)}}>Add to Cart</button>
                     </div>
                 </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return {
      userName : state.auth.username,
      iD : state.auth.id,
    }
  }
export default connect(mapStateToProps, null)(ProdutcsItem)
