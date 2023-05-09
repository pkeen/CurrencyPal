import React from 'react';
import styles from './ResultsDisplay.module.css';

function ResultsDisplay({currencyComparison, currency1, currency2, multiplier}) {
     /* Currency Comparisons */
  // const currencyComparison = useCompareCurrencies(selectedCurrency1, selectedCurrency2);

  /* Logic for creating list */
  let currencyComparisonArray = Object.entries(currencyComparison);

  currencyComparisonArray = currencyComparisonArray.map((currencyComparison) => {
    return <li key={currencyComparison[0]}>{currencyComparison[1] * multiplier} {currencyComparison[0]} </li>
  })

  return (
    <div className={styles.twoColumn}>
        <div className={styles.firstCurrency} >
            <p>{multiplier} {currency1} = </p>
        </div>
        <ul className={styles.secondCurrency}>
            {currencyComparisonArray}
        </ul>
    </div>
    
  )
}

export default ResultsDisplay;