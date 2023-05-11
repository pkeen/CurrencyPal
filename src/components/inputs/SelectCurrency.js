import React from 'react';
import { TextField, MenuItem } from '@mui/material';

export default function SelectCurrency({currencies}) {
    /* Currency options */
    let currenciesArray = Object.entries(currencies, menuVariant);

    currenciesArray = currenciesArray.map((currency) => {
        return (    
            <MenuItem
                key={currency[0]} 
                value={currency[0]}
                //variant={menuVariant}
                >
                    {currency[0].toUpperCase()}: {currency[1]}
            </MenuItem>
        )
    });

    return (
        <TextField 
                select
                //fullWidth 
                required
                placeholder="Select Currency"
                inputProps={{ 'aria-label': 'Select currency' }}
                className={"subvariant-noBorder"}
            >
                <MenuItem value="" selected disabled hidden>Choose Currency</MenuItem>
                {currenciesArray}
        </TextField>
    )
}