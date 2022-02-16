import logo from './logo.svg';
import './App.css';
// import Nav from './Nav';
import React from 'react';
import Content from './Content';
// import Sidebar from './Sidebar';

function App() {
  
  return (
    <React.Fragment>
        <h1>HIIII!!!</h1>
          <p>React tutorials!!!</p>
            <h2>hide and show!!</h2>
              <button onClick={()=>{alert("yes!!!")}} >click me!</button>
                <div className={'col-md-9 background'}>
                <Content isPrimary={true} name='jay' age="30" favouriteSport='soccer' />
              </div>
      </React.Fragment>
  );
}

export default App;
