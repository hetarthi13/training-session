import { useState } from 'react';

export const useCounter = (initialCount = 0) => {
    const [count, setCount] = useState(initialCount);

    const incCount = () => setCount(count + 1);
    const decCount = () => setCount(count - 1);

    return { count, incCount, decCount };
};
