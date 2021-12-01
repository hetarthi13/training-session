import React  from 'react'

function TwoComponent (props) {
   console.log("memo rendering!!!")

      return (
         <div>
         <h1>React component {props.count}</h1>
         </div>
      );
    }

export default React.memo(TwoComponent);
