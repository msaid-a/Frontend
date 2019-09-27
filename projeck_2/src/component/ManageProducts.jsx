import React, { Component } from 'react'
import axios from 'axios'

class ManageProducts extends Component {
    
    clear = () =>{
         this.namaBarang.value =''
         this.deskripsi.value =''
         this.harga.value =''
         this.linkGambar.value =''
    }

    onAddClick = () =>{
        let _namaBarang = this.namaBarang.value
        let _deskripsi = this.deskripsi.value
        let _harga = this.harga.value
        let _gambar = this.linkGambar.value
        
        console.log(_namaBarang, _deskripsi, _harga, _gambar)
        axios.post(
            'http://localhost:2020/products',
            {
                nama: _namaBarang,
                deskripsi: _deskripsi,
                harga : _harga,
                linkGambar : _gambar
            }
        )
         this.clear()
        
    }

    tampil = () =>{

    }


    render() {
        return (
            <div className="container">
                <h1 className="display-4 text-center">List Products</h1>
                <table className="table table-hover text-center">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>NAMA</th>
                            <th>Deskripsi</th>
                            <th>Harga</th>
                            <th>Gambar</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                </table>
                <h1 className="display-4 text-center">Input Products</h1>
                <table className="table table-hover text-center">
                    <thead>
                        <tr>
                            <th>NAMA</th>
                            <th>Deskripsi</th>
                            <th>Harga</th>
                            <th>Gambar</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><input className="form-control" type="text" ref={input => {this.namaBarang = input}}/></td>
                            <td><input className="form-control" type="text" ref={input => {this.deskripsi = input}}/></td>
                            <td><input className="form-control" type="text" ref={input => {this.harga = input}}/></td>
                            <td><input className="form-control" type="text" ref={input => {this.linkGambar = input}}/></td>
                            <td><button className="btn btn-danger" onClick={this.onAddClick}>ADD</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default ManageProducts
// 1. mampu menambah program (Post)
// 2, mamou membaca produtck (Get)
// 3. Update produtcs (PATCH)
// 4. Delete Produtcs (DELETE)