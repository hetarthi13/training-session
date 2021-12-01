import React,{PureComponent} from 'react'


export default class OneComponent extends PureComponent {
    constructor(){
      super()
    }

    render() {
        console.log("Pure component  reredering!!!")
      return (
         <div>
         <h1>pure component {this.props.count}</h1>
         </div>
      );
    }
}