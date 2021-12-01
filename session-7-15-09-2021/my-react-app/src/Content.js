import React, {Component} from 'react'
import Table from './Table';
import './Custom.css'
import styles from './myStyle.module.css'

export default class Content extends Component {

    constructor() {
        super()
        this.state = {
            isLoggedIn: true,
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
        let message

        if(this.state.isLoggedIn) {
            message = this.state.message;
        } else {
            message = 'Welcome, Guest';
        }

        let pClass = this.props.isPrimary ? 'primary' : '';


        return (
            <React.Fragment>
             <h1 className={`${pClass} font-xl`} id="content">{this.state.isLoggedIn ? this.state.message : ''}</h1>
             <p className={styles.myClass}>My name is {name}. I am {age}. My favorite sport is {favouriteSport}</p>

            <Table functionName={this.changeMessage}></Table>

            <h2>Counter - {this.state.counter}</h2>
            <button onClick={() => this.incrementCounter()}>Increment</button>
         </React.Fragment>
        )
    }
}
