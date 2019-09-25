import React, {Component} from 'react';
import Search from './search'
import ImageList from './imagesList'
import axios from 'axios'
import Api from './api'

class App extends Component{

  state ={
      pictures:[]
  }

  //terms adalah inoutan 
  onSearchSubmit = (term) =>{
    // request gambar
    axios.get(
      'https://api.unsplash.com/search/photos', 
      {
        headers : {
          Authorization: 'Client-ID 5b0f90dcc3c1c83a0a27ac4f519c20caef687efa7493cee91fc26199c3304419'
        },

        params: {
          query: term
        }
      }
    ).then((respon) => {
      // then akan dijalakan ketika proses rquest berhasil
      // Object yang punya banyak properti
      // console.log(respon.data.results)
      this.setState({pictures :respon.data.results})
    })
  }
  // onSearchSubmit = () =>{
  //     Api.get(this.state.terms).then(res =>{console.log (res)})
  // }

  render (){
    return (
      <div className="container">
      <header>
        <h1 className ="text-center mt-3 mb-5">Image Search Engine</h1>
        {/* 'SearchSubmit' */}
          <Search SearchSubmit = {this.onSearchSubmit}/>
          <ImageList show = {this.state.pictures}/>
      </header>
    </div>
  );
}
}

export default App;
// AIzaSyDk0JfRI4SSOpZKQnyn5uB3LmSadRoQP4A