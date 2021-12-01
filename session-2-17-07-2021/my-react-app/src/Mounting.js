import React, { Component } from 'react'

export default class Mounting extends Component {
    constructor(props){
        super(props);
        this.state={
            active : null,
            name  : null
        }
    }

    // static getDerivedStateFromProps(){
    //     console.log("getDerivedFromProps")
    // }

    shouldComponentUpdate(){
        console.log("shouldComponentUpdate")
        if(this.state.name==null){
            this.setState({who:"update saucessfully!!!"})
        }
        return null;
    }


    incrementClick = () =>{
        this.setState({name : "not sucessfully!!"})
    }
    
    // getSnapshoteforeUpdate(){
    //     console.log(" getSnapshotBeforeUpdate")
    // }

    // componentDidUpdate(){

    //     console.log("componentDidUpdate")
    // }


    // componentDidMount(){

    //     console.log("componentDidMount")
    // }


    render() {
        console.log("render")
        return (
            <div>
            <h1>componentDidUpdate {this.state.name}</h1>      
            {/* <button onClick={()=>{this.setState({active:"yes"})}}>Activate</button>     */}
            <button onClick={()=>{this.setState({active:"yes"})}}>Activate</button>  
            <button onClick={()=>{this.incrementClick}}>click me</button>  
            </div>
        )
    }
}
