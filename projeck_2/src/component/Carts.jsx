// import React, { Component } from 'react'
// import axios from 'axios'
// import Swal from 'sweetalert2'
// import {Redirect} from 'react-router-dom'
// import {connect} from 'react-redux'


// class Carts extends Component {
//     state = {
//         products : [],
//     }
    
//     // getData = () =>{
//     //     axios.get('http://localhost:2020/carts/',{
//     //         params : {
//     //             id_user : this.props.iD
//     //         }
//     //     })
//     //     .then(res => {
//     //         return this.setState({
//     //             products: res.data
//     //         })
//     //     })
    
//     // }

//     getData = () =>{
//         axios.get('http://localhost:2020/carts',{
//             // params : {
//             //     id_user : this.props.iD
//             // }
//         })
//             .then(res => {
//             console.log(res.data)
//                 this.setState({
//                     products: res.data,
//                 })
//             })

//     }
    
//     componentDidMount(){
//         this.getData()
//     }

//     tampil = () =>{
//         return this.state.products.map(produk => {
//         let harga = Intl.NumberFormat().format(produk.harga).replace(/,/g, '.')
//            return  <tr key ={produk.id}>
//                         <td>{produk.id}</td>
//                         <td>{produk.nama_produk}</td>
//                         <td><img src={produk.gambar} height='60' alt=""/></td>
//                         <td>{produk.qty}</td>
//                         <td>Rp.{harga}</td>
//                         <td>
//                                 <button onClick = {() => {this.toggleUpdate(produk.id)}} className="btn btn-primary mr-1" data-target="#modal1">Edit</button>
//                                 <button onClick={() => {this.onDeleteClick(produk.id)}} className="btn btn-danger ">Delete</button>
//                         </td>
//                     </tr>
//         })
//     }


//     render() {
//         return (
//             <div className="container">
//             <div>
//                 <h1>{this.props.userName}</h1>
//                 <table className="table table-hover text-center">
//                     <thead>
//                         <tr>
//                             <th>ID</th>
//                             <th>NAMA</th>
//                             <th>Gambar</th>
//                             <th>QTY</th>
//                             <th>Harga</th>
//                             <th>Action</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {this.tampil()}
//                     </tbody>
//                 </table>
//             </div>
//             </div>
//         )
//     }
// }
// const mapStateToProps = (state) =>{
//     return {
//       userName : state.auth.username,
//       iD : state.auth.id,
//     }
//   }
// export default connect(mapStateToProps,null)(Carts)
