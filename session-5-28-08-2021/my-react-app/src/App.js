import logo from './logo.svg';
import './App.css';
import Nav from './Nav';
import React from 'react';
import Content from './Content';
import Sidebar from './Sidebar';

function App() {

  
  return (
    <React.Fragment>
      <Nav />
      <div className="row">
        <div className="col-md-3">
          <Sidebar />
        </div>
        <div>
        <h1> this is time  </h1> 
        </div>
        <div className="col-md-9">

          <Content name='jay' age="30" favouriteSport='soccer' />

        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
