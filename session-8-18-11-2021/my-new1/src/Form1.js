import React, { Component } from 'react'

export default class Form1 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: ""
        }
        
        this.onTextChange = this.onTextChange.bind(this);
    }

    onTextChange = (event) => {
        this.setState({name: event.target.value});
    }
    
    onAreaChange = (e) => {
        this.setState({name: e.target.value });
    }

    render() {
        return (
           <div>
            <div class="mb-3">
                <label for="formGroupExampleInput" class="form-label">Input Area</label>
                <input type="text" onChange={this.onTextChange} value={this.state.name} class="form-control" id="formGroupExampleInput" placeholder="Example input placeholder" />
            </div>
                {this.state.name}
            <div class="mb-3">
                <label for="formGroupExampleInput2" class="form-label">Text Area</label>
                <textarea type="text" onChange={this.onAreaChange} value={this.state.name} class="form-control"   id="formGroupExampleInput2" placeholder="Another input placeholder"></textarea>
            </div>  
            </div>
        )
    }
}
