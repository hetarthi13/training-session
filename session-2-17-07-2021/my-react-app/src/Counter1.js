import React from 'react'

import { useCounter } from './useCounter';

const Counter1 = ({ initialCount }) => {
    const { count, incCount, decCount } = useCounter(initialCount);

    return (
        <div className="counter2">
            <button onClick={decCount}>Dec</button>
            <span>{count}</span>
            <button onClick={incCount}>Inc</button>
        </div>
    );
};

export default Counter1;
