import React from 'react';
import { TextField } from '@mui/material';

function MultiplierField({value, handleMultiplier}) {
    return (
        <TextField 
            sx={{ pl: 1, flex: 1 }}
            type="number"
            value={value} 
            onChange={handleMultiplier}
            placeholder='Amount'
            //fullWidth
            className={"subvariant-noBorder"}
            inputProps={{ 'aria-label': 'Currency amount' }}
        />
    )
}

export default MultiplierField;