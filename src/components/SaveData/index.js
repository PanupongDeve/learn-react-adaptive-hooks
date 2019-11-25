import React from 'react';
import { useSaveData  } from 'react-adaptive-hooks/save-data';

export default () => {
    const { saveData  } = useSaveData();

    const response  = saveData ? 'saved data' : 'unsaved data';
    return <div>{response }</div>
    
}