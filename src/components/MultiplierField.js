import React from 'react';
import { TextField } from '@mui/material';

function MultiplierField({name, value, handleMutliplier, className}) {
    return (
        <TextField 
            type="number"
            name={name} 
            value={value} 
            onChange={handleMutliplier}
            fullWidth
            className={`subvariant-left ${className}`} />
    )
}


export default MultiplierField;