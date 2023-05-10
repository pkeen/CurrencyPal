import { Typography, Grid } from "@mui/material";
import React from 'react';

function ExchangeRateDisplay({exchangeRate}) {

    const ExchangeRate = (
        <Grid item xs={12}>
            <Typography sx={{textAlign: 'center', fontStyle: 'italic'}}>Exchange rate: 1 / {exchangeRate}</Typography>
        </Grid>
    )
    // show if exchangeRate

    const show = exchangeRate ? true : false
    return (
        <>
            {exchangeRate && ExchangeRate}
        </>
    )   
}

export default ExchangeRateDisplay;

