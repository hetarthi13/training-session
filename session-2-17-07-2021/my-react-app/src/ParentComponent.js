import React,{Component} from 'react'
//import TwoComponent from './Component';

//import OneComponent from './PureComponent';

// export default  function ParentComponent ()  {
//     this.state={
//                 data:10
//             }
//     componentDidMount() {
//            setInterval(() => {
//                    this.setState({
//                         data : 'Hi'
//            });
//                 }, 5000);
//              }
            
//     return(
//             <>
//                 <h1>React Memo<TwoComponent count={this.state.data}>    </TwoComponent>
//                 </h1>
                
//             </>

//     );
// }
export default class ParentComponent extends Component {


    constructor() {
        super()
          
        this.inputRef = React.createRef()
        this.inputypeRef = React.createRef()
        this.selectRef = React.createRef()
        this.textareaRef = React.createRef()
        this.radioRef = React.createRef()

        this.componentDidMount = this.componentDidMount.bind(this);
        this.selectChange = this.selectChange.bind(this);
        this.textareaChange = this.textareaChange.bind(this);
        this.radioChange = this.radioChange.bind(this);
        this.inputypeChange = this.inputypeChange.bind(this);
    }

    inputypeChange() {
        console.log(this.inputypeRef.current.value);
        
        this.inputypeRef.current.value();
}


    componentDidMount() {
            console.log(this.inputRef.current.value);
            
            this.inputRef.current.value="100";
    }

    selectChange(){
        console.log(this.selectRef.current.value);
            
        this.selectRef.current.value="";
    }

    textareaChange(){
        console.log(this.textareaRef.current.value);
            
        this.textareaRef.current.value="React!! ";

    }

    radioChange(){
        console.log(this.radioRef.current.value);

        this.radioRef.current.value=" ";
    }

    

    render() {
     
        return (
            <div>
            <div className="App"> 
            <label>
            Enter your name :
            <input type="text" ref={this.inputypeRef} />
                </label>
            </div>
            <div className="App">
                <label>
                    name : 
                <input type="text" ref={this.inputRef} name="name"  /><br></br>
                <button as="input" 
                    onClick={this.inputypeChange} 
                    type="submit" 
                    value="submit">
                    click Me!
                    </button>
                </label>
                <div className="App">
                    <button as="input" 
                    onClick={this.componentDidMount} 
                    type="submit" 
                    value="submit">
                    click Me!
                    </button>
                </div><br>
                </br>
                <label>
                Textarea :
                <textarea  ref={this.textareaRef}>
                </textarea>
                <div className="App">
                <button as="text" 
                    onClick={this.textareaChange} 
                    type="submit" 
                    value="submit">
                    click Me!
                    </button>
                </div>
                </label>
                <div className="App">
                <label>
                Pick your favorite language :
                <select ref={this.selectRef}>
                    <option value="javascript" >javascript</option>
                    <option value="Raact" on>Raact</option>
                    <option value="css">Css</option>
                    <option value="Java">Java</option>
                </select>
                <input type="submit" onClick={this.selectChange} />
                </label>
              </div>

        <div className="radio">
          <label>
            <input
              type="radio"
              
              ref={this.radioRef}
              onClick={this.radioChange}
            />
            Male
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              ref={this.radioRef}
              onClick={this.radioChange }
            />
            Female
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              ref={this.radioRef}
              onClick={this.radioChange }
            />
            others
          </label>
        </div>
        </div>
                            </div>                    
                            );
                    }

                }



{/* //      constructor(){ */}
//       super()
//       this.state={
//         data:10
//       }
  
//     }

//     componentDidMount(){
//         setInterval(() => {
//             this.setState({
//                 data : 'Hi'
//             });
//         }, 5000);
//     }
  
//     render() {
//         console.log("Parent reredering!!!")
//       return (
//          <div className="App">
//          <p>diference between component and pure component!!!</p>
//             <h1>Parent component <TwoComponent count={this.state.data} />
//             {/* <OneComponent  count={this.state.data} /> */}
//             </h1>
//          </div>
//       );
//     }
// }