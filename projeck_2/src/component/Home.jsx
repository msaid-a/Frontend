import React, { Component } from 'react'
import axios from 'axios'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';

 class Home extends Component {
    state ={
        products:[]
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
componentDidMount(){
    this.getData()
    
}
tampilProduk = ()=>{
    return this.state.products.map(produk =>{
        let harga = Intl.NumberFormat().format(produk.harga).replace(/,/g, '.')
        return( 
            <Card className="mt-5 mx-auto" style={{width : '18rem'}}>
                <CardImg top width="100%" src={produk.linkGambar} alt="Card image cap" />
                <CardBody>
                    <CardTitle className='h4'>{produk.nama}</CardTitle>
                    <CardSubtitle className='h5 mb-2'>{harga}</CardSubtitle>
                    <CardText>{produk.deskripsi}</CardText>
                    <Button color='primary'>Buy Now</Button>
                </CardBody>
            </Card>
            )
    })
}
    render() {
        return (
            <div className='container'>
            <div className="row">
                {this.tampilProduk()}
            </div>
            </div>


        )
    }
}

export default Home
