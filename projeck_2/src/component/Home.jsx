import React, { Component } from 'react'
import axios from 'axios'
import ProdutcsItem from './ProdutcsItem'

 class Home extends Component {
    state ={
        products:[],
        search: []
    }

// Ambil Barang untuk ke componentDidMount
getData = () =>{
    axios.get('http://localhost:2020/products')
        .then(res => {
            this.setState({
                products: res.data,
                search: res.data,
            })
        })
}
componentDidMount(){
    this.getData()
    
}
tampilProduk = ()=>{
    return this.state.search.map(produk =>{
        return( 
            <ProdutcsItem barang={produk} key={produk.id}/>

            )
    })
}

onBtnSearch = () => {
    let namaBarang = this.name.value.toLowerCase()
    let minimum = this.min.value
    let maximum = this.max.value

    const result = this.state.products.filter(produk => {
        let produkLowerName = produk.nama.toLowerCase()
      
        return produkLowerName.includes(namaBarang)
        
        
        
    })
    this.setState({search: result})
    
}

    render() {
        return (
        <div className="container-fluid ">
            <div className="row">
                {/* Search Bar */}
                <div className="col-10 col-lg-3 mt-5">
                    <div className="card">
                        <div className="card-body">
                            <h1 className="border-bottom border-secondary card-title">Search</h1>
                            <form className="form-group mb-3" onSubmit= {e => e.preventDefault()}>
                                <h4>Name</h4>
                                <input type="text" className="form-control" ref= {input => {this.name = input}}/>

                                <h4>Price</h4>
                                <input placeholder="Minimum" type="number" className="form-control mb-2" ref={input => {this.min = input}}/>
                                <input placeholder="Maximum" type="number" className="form-control" ref= {input => {this.max = input}}/>
                            <button className="btn btn-block btn-outline-primary" onClick = {this.onBtnSearch}>Search</button>
                            <button className="btn btn-block btn-outline-warning">Show All</button>
                            </form>
                        </div>
                    </div>
                </div>
                
                {/* List Products */}
                <div className='row col-10 col-lg-9  '>
                        {this.tampilProduk()}
                </div>
                </div>
            </div>
       

        )
    }
}

export default Home

