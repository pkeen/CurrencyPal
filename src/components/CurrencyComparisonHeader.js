import React from 'react';
import { Typography } from '@mui/material';

function CurrencyComparisonHeader({currency1, currency2}) {
    //hide this component if currency1 is not selected
    return (
        <Typography 
            variant="h6" 
            component="h2"
            sx={{textAlign: 'center'}}
            >
            Comparing {currency1 ? currency1.toUpperCase() : 'select'} to {currency2 ? currency2.toUpperCase() : 'all currencies'}
        </Typography>
    )
}

export default CurrencyComparisonHeader;