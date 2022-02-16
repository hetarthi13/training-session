import React from 'react'
import PersonRow from './PersonRow';
        
const ListStyle = {
    fontSize: '20px',
    color: 'green'
};

function Table(props) {
    const names = [{id: 1, name: 'Hetarthi'}, {id: 2, name: 'Tishya'}, {id:3, name: 'Hinal'}];
    
    // const namesRows = names.map(name => <PersonRow name={name}></PersonRow>)
    // const namesRows = 
    return (
        <div>
            <ul>
                {names.map(obj => <li style={ListStyle} key={obj.id}>
                {obj.id}--
                {obj.name}</li>)}
            </ul>
            
        </div>
    )
}

export default Table
