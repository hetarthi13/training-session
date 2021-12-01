import React from 'react'

function Sidebar() {


    function clickHandler() {
        console.log('Hi');
    }

    return (
        <React.Fragment>
            <ul className="list-group">
                <li className="list-group-item" onClick={clickHandler}>Cras justo odio</li>
                <li className="list-group-item">Dapibus ac facilisis in</li>
                <li className="list-group-item">Morbi leo risus</li>
                <li className="list-group-item">Porta ac consectetur ac</li>
                <li className="list-group-item">Vestibulum at eros</li>
            </ul>
        </React.Fragment>
    )
}

export default Sidebar
