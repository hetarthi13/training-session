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
        <div className="col-md-9">
          <Content />
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
