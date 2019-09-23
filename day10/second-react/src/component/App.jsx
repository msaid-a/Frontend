import React, {Component} from 'react';
import Search from './search'

class App extends Component{
  render (){
    return (
      <div className="container">
      <header>
        <h1 className ="text-center mt-3 mb-5">Image Search Engine</h1>
          <Search />
      </header>
    </div>
  );
}
}

export default App;
