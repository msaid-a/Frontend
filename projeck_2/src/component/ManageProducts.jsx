import React, { Component } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import {Redirect} from 'react-router-dom'


class ManageProducts extends Component {
    state = {
        products : [],
        selectProducts : {id : '', nama : '', deskripsi : '',harga : '', linkGambar: ''},
        idProducts: 0,
        modal : false
    }
    // Redirect
    redirect = () =>{
        if(this.props.userName === ''){
            return (<Redirect to ='/'> </Redirect>)
        }
    }

// Update Barang
    toggleUpdate = (id) =>{
        axios.get('http://localhost:2020/products/' + id).then(
                res=>{
                    this.setState(prevState => ({
                    modal: !prevState.modal,
                    idProducts : id,
                    selectProducts : res.data
                    }));
                }
            )
      }

      toggleCancel = () =>{
          this.setState(prevState => ({
              modal : !prevState.modal,
          }))
      }

      onSaveUpdate = (id) =>{
        // // With placeholder
        // let _nama = this.editBarang.value ? this.editBarang.value : this.editBarang.placeholder
        // let _deskripsi = this.editDeskripsi.value ? this.editDeskripsi.value : this.editDeskripsi.placeholder
        // let _harga = this.editHarga.value ? this.editHarga.value : this.editHarga.placeholder
        // let _linkGambar = this.editLinkGambar.value ? this.editLinkGambar.value : this.editLinkGambar.placeholder

        //  // with Value

        let _nama = this.editBarang.value 
        let _deskripsi = this.editDeskripsi.value 
        let _harga = this.editHarga.value        
        let _linkGambar = this.editLinkGambar.value

        axios.patch('http://localhost:2020/products/' + id,{
            nama : _nama,
            deskripsi : _deskripsi,
            harga : _harga,
            linkGambar : _linkGambar
        }).then(res =>{
            this.getData()
            Swal.fire(
                'Success!',
                'Your file has been Update.',
                'success',
                )
                this.toggleCancel()
        })
    }
// Clear
    clear = () =>{
         this.namaBarang.value =''
         this.deskripsi.value =''
         this.harga.value =''
         this.linkGambar.value =''
    }
// Ambil Barang untuk ke componentDidMount
    getData = () =>{
        axios.get('http://localhost:2020/products')
            .then(res => {
                this.setState({
                    products: res.data,
                })
            })

    }

    componentDidMount = () =>{
        this.getData()
        
    }

// tampil Barang dalam bentuk tabel
    tampil = () =>{
        return this.state.products.map(produk => {
        let harga = Intl.NumberFormat().format(produk.harga).replace(/,/g, '.')
           return  <tr key ={produk.id}>
                        <td>{produk.id}</td>
                        <td>{produk.nama}</td>
                        <td>{produk.deskripsi}</td>
                        <td>Rp.{harga}</td>
                        <td>
                            <img height="60" src={produk.linkGambar} alt=""/>
                        </td>
                        <td>
                                <button onClick = {() => {this.toggleUpdate(produk.id)}} className="btn btn-primary mr-1" data-target="#modal1">Edit</button>
                                <button onClick={() => {this.onDeleteClick(produk.id)}} className="btn btn-danger ">Delete</button>
                        </td>
                    </tr>
        })
    }

// tambah Barang
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
        ).then(res =>{
            // this.clear()
            this.getData()
            this.clear()
            Swal.fire({
                title:'Your file has been Added.',
                type : 'success',
                showConfirmButton:false,
                timer: 1500,
            })
        })
        
    }

//    Delete barang
    onDeleteClick = (id)=>{
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
              if (result.value) {
                axios.delete('http://localhost:2020/products/' + id).then(res =>{
                    this.getData()
                })
                  Swal.fire({
                    title:'Your file has been Deleted.',
                    type : 'success',
                    showConfirmButton:false,
                    timer: 1500,
                  })
                  
            }
          })
    }

    

    render() {
        let {id, nama, deskripsi, harga, linkGambar} = this.state.selectProducts
        return (
            <div className="container">
                {this.redirect()}
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
                    <tbody>
                        {this.tampil()}
                    </tbody>
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
                            <td>
                                <input className="form-control" type="text" ref={input => {this.namaBarang = input}}/>
                            </td>
                            <td>
                                <input className="form-control" type="text" ref={input => {this.deskripsi = input}}/>
                            </td>
                            <td>
                                <input className="form-control" type="text" ref={input => {this.harga = input}}/>
                            </td>
                            <td>
                                <input className="form-control" type="text" ref={input => {this.linkGambar = input}}/>
                                </td>
                            <td>
                                <button className="btn btn-dark" onClick={this.onAddClick}>Add</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} id="modal1">
                    <ModalHeader toggle={this.toggle}>{nama}</ModalHeader>
                    <ModalBody>
                        <form>
                            <label>Nama:</label>
                             <input className="form-control" type="text" ref={input=> {this.editBarang = input}} defaultValue={nama}/>
                            <label>Deskripsi : </label>
                            <input className="form-control" type="text" ref={input=> {this.editDeskripsi =input}} defaultValue={deskripsi} / >
                            <label >Harga :</label>
                            <input className="form-control" type="text" ref={input=> {this.editHarga=input}} defaultValue={harga} />
                            <label>Link Gambar :</label>
                            <input className="form-control" type="text" ref={input=> {this.editLinkGambar = input}} defaultValue={linkGambar}/>
                        </form>
                    </ModalBody>
                    <ModalFooter>
                        <button onClick={() => {this.onSaveUpdate(id)}} className="btn btn-primary">Save</button>
                        <button onClick={this.toggleCancel} className="btn btn-danger">Cancel</button>
                    </ModalFooter>
                </Modal>
            </div>
        )
    }
}
export default ManageProducts


{/* // // 1. mampu menambah program (Post)
// // 2, mamou membaca produtck (Get)
// // 3. Update produtcs (PATCH)
// // 4. Delete Produtcs (DELETE) */}

{/*  ketika function yang di panggil dalam onclick tidak memiliki parameter maka
        onClick={this.namaFunction}
    ketika function yang di panggil dalam onClick memiliki parameter maka hrus di masukan dalam function
        onClick {()=.{this.namaFunction}} 
*/}