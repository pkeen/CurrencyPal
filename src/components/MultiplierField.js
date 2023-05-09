import React from 'react';
import { TextField } from '@mui/material';

function MultiplierField({name, value, handleMutliplier}) {
    return (
        <TextField 
            type="number"
            name={name} 
            value={value} 
            onChange={handleMutliplier}
            fullWidth />
    )
}


export default MultiplierField;