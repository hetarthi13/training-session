import React from 'react'

function Table(props) {

    return (
        <div>
            <button onClick={() => props.functionName('Jeet')}>Change message</button>
        </div>
    )
}

export default Table
