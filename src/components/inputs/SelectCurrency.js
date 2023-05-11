import React from 'react';
import { TextField, MenuItem, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export default function SelectCurrency({currencies, handleSelectCurrency, menuVariant}) {
    /* Currency options */
    let currenciesArray = Object.entries(currencies);

    currenciesArray = currenciesArray.map((currency) => {
        return (    
            <MenuItem
                key={currency[0]} 
                value={currency[0]}
                variant={menuVariant}
                >
                    {currency[0].toUpperCase()}: {currency[1]}
            </MenuItem>
        )
    });

    return (
        <TextField 
                select
                onChange={handleSelectCurrency}
                //fullWidth 
                defaultValue="none"
                inputProps={{ 'aria-label': 'Select currency' }}
                className={"subvariant-noBorder"}
            >
                <MenuItem value="none" selected disabled>Choose Currency</MenuItem>
                {currenciesArray}
        </TextField>
    )
}