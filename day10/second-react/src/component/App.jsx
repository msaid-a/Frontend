import React, {Component} from 'react';
import Search from './search'

class App extends Component{

  onSearchSubmit = (term) =>{
    console.log(term)
  }

  render (){
    return (
      <div className="container">
      <header>
        <h1 className ="text-center mt-3 mb-5">Image Search Engine</h1>
          <Search onSearchSubmit = {this.onSearchSubmit}/>
      </header>
    </div>
  );
}
}

export default App;
