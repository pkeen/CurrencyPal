import React from 'react';
import Select from '@mui/base/Select';
import Option from '@mui/base/Option';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

export default function SelectField() {
    return (
        <TextField
            select
            fullWidth>
            <MenuItem value="1">1</MenuItem>
            <MenuItem value="2">2</MenuItem>
        </TextField>
    )
}