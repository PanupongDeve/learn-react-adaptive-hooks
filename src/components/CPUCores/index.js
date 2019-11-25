import React from 'react';
import { useHardwareConcurrency } from 'react-adaptive-hooks/hardware-concurrency';

export default () => {
    const { numberOfLogicalProcessors } = useHardwareConcurrency();

    return <div>{numberOfLogicalProcessors}</div>
    
}