import React from 'react';
import { useNetworkStatus  } from 'react-adaptive-hooks/network';

export default () => {
    const { effectiveConnectionType } = useNetworkStatus();
    
    return <div>{effectiveConnectionType}</div>
    
}