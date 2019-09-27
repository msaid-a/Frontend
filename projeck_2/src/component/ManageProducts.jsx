import React, { Component } from 'react'

class ManageProducts extends Component {
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
                            <td><input className="form-control" type="text"/></td>
                            <td><input className="form-control" type="text"/></td>
                            <td><input className="form-control" type="text"/></td>
                            <td><input className="form-control" type="text"/></td>
                            <td><button className="btn btn-primary">ADD</button></td>
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