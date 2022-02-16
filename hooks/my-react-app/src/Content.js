import React, {Component} from 'react'
import Table from './Table';

// function Content(props) {



//     return (
//         <React.Fragment>
//             <h1 class="bd-title" id="content">Hello, {props.name}, {props.age}</h1>
//             <p class="bd-lead">{props.name}'s favorite sport is {props.favouriteSport}</p>

//             {props.children}
//         </React.Fragment>
//     )
// }

export default class Content extends Component {

    constructor() {
        super()
        this.state = {
            message: 'Welcome, Jay',
            counter: 0
        };

        // this.incrementCounter = this.incrementCounter.bind(this)
        this.changeMessage = this.changeMessage.bind(this)
    }

    changeMessage(name) {
        console.log("ok");
        this.setState({
            message: 'Welcome, ' + name
        })
    }

    incrementCounter() {
        this.setState((prevState, props) => ({
            counter: prevState.counter + parseInt(props.age)
        }));
    }

    render() {
        const {name, age, favouriteSport} = this.props;

        return (
            <React.Fragment>
             <h1 className="bd-title" id="content">{this.state.message}</h1>
             <p className="bd-lead">My name is {name}. I am {age}. My favorite sport is {favouriteSport}</p>

            <Table functionName={this.changeMessage}></Table>

            <h2>Counter - {this.state.counter}</h2>
            <button onClick={() => this.incrementCounter()}>Increment</button>
         </React.Fragment>
        )
    }
}
