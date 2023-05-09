import React, {useState} from 'react';
import Select from '@mui/base/Select';
import Option from '@mui/base/Option';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';


function SelectCurrency({currencies, handleSelectCurrency}) {

    /* Currency options */
    let currenciesArray = Object.entries(currencies);

    currenciesArray = currenciesArray.map((currency) => {
        return (    
            <MenuItem
                key={currency[0]} 
                value={currency[0]}
                >
                    {currency[0].toUpperCase()}: {currency[1]}
            </MenuItem>
        )
    });

    

    return (
            <TextField 
                select
                fullWidth 
                required
                onChange={handleSelectCurrency} 
                placeholder="Choose currency">
                <MenuItem value="" selected disabled hidden>Choose Currency</MenuItem>
                {currenciesArray}
            </TextField>
        
    )
}

export default SelectCurrency;