import './App.css';
import React, { useEffect } from 'react'
import Counter1 from './Counter1';
// import Form from './Form'

function App() {
        // const [state, setstate] = useState(0);

        useEffect(() => {
                Document.title = "you click ${state}";
        });

        return (
                <>
                        <div>
                                {/* <Form /> */}
                                {/* count : {state}<br />

                                <button onClick={() => setstate(state + 1)}>incremnt</button> */}
                                <br />
                                <Counter1 initialCount={0} />
                        </div>
                </>
        )
}
export default App
// import state from './state';
// import ParentComponent from './ParentComponent';

// export default class App extends React.Component {
//         render() {
//                 return (
//                          <div className="App">
//                          <state />
//                          <ParentComponent />
//                          </div>
//                 );
//         }


// }

// import ParentComponent from './ParentComponent';
// import PureComponent from './PureComponent';
// import Component from './Component';

// function App(){
// return(
//         <div className="App">
//         <label>
//         name : 
//         <input type="text" name="name" />
//         </label>
//         {/* //<ParentComponent /> */}
//         </div>
// )
// }

// export default App
//---componentDidCatchError lifecycle------//
// class App extends React.Component{
//     <Content />
// //   constructor(){
// //     super();
// //     this.state={
// //         error : false
// //     }
// //   }

// //   componentDidCatch(error) {
// //       this.setState({
// //           error : true
// //       })
// //   }
// //   render() {
// //       return (
// //            <div>
// //               {this.state.error ? <h1>Error!!!</h1> : <Content />}
// //           </div> 

// //       );
// //   }


// }

