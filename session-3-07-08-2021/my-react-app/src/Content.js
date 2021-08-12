import React, {Component} from 'react'

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
    }

    changeMessage() {
        this.setState({
            message: 'Welcome, Tishya'
        })
    }

    incrementCounter() {
        this.setState((prevState, props) => ({
            counter: prevState.counter + parseInt(props.age)
        }));
    }

    render() {
        return (
            <React.Fragment>
             <h1 className="bd-title" id="content">{this.state.message}</h1>
             <p className="bd-lead">{this.props.name}'s favorite sport is {this.props.favouriteSport}</p>

            <button onClick={() => this.changeMessage()}>Change message</button>

            <h2>Counter - {this.state.counter}</h2>
            <button onClick={() => this.incrementCounter()}>Change message</button>
         </React.Fragment>
        )
    }
}
