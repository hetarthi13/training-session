import React from 'react'
import PersonRow from './PersonRow';

function Table(props) {
    const names = [{id: 1, name: 'Hetarthi'}, {id: 2, name: 'Tishya'}, {id:3, name: 'Hinal'}];
    
    // const namesRows = names.map(name => <PersonRow name={name}></PersonRow>)
    // const namesRows = 
    return (
        <div>
            <ul>
                {names.map(obj => <li key={obj.id}>{obj.name}</li>)}
            </ul>
            
        </div>
    )
}

export default Table
