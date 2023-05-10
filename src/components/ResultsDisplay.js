import React from 'react';
import localFormatCurrency from '../utils/localFormatCurrency';
import { Grid, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

function ResultsDisplay({currencyComparison, currency1, currency2, multiplier, multiplier2}) {
     /* Currency Comparisons */
  // const currencyComparison = useCompareCurrencies(selectedCurrency1, selectedCurrency2);
  if (!currency1 || !currency2) {
    return (<></>)
  }
  /* Logic for creating list */
  let currencyComparisonArray = Object.entries(currencyComparison);

  currencyComparisonArray = currencyComparisonArray.map((currencyComparison) => {
    return <li key={currencyComparison[0]}>{currencyComparison[1] * multiplier} {currencyComparison[0]} </li>
  })

  return (
    <Grid item>
      <Typography 
        variant='h5' 
        component='h2'
      > 
          <span className="primary">
          {localFormatCurrency(multiplier)} {currency1.toUpperCase()}
          </span>
          {` = `}
          <span className="secondary">
           {localFormatCurrency(multiplier2)} {currency2.toUpperCase()}
          </span> 
      </Typography>
    </Grid>
        

    
  )
}

export default ResultsDisplay;

/*
<br></br>
        <ul className={styles.secondCurrency}>
            {currencyComparisonArray}
        </ul>

        */