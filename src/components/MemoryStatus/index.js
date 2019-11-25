import React from 'react';
import { useMemoryStatus } from 'react-adaptive-hooks/memory';

export default () => {
    const { deviceMemory } = useMemoryStatus();

    return <div>{deviceMemory }</div>
    
}