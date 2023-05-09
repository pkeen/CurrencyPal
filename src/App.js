import React, {useState, useEffect} from 'react';
import './App.css';
import useCurrencies from './hooks/useCurrencies';
import useCompareCurrencies from './hooks/useCompareCurrencies';
import SelectCurrency from './components/SelectCurrency';
import CurrencyComparisonHeader from './components/CurrencyComparisonHeader';
import ResultsDisplay from './components/ResultsDisplay';

function App() {

  // Get currencies for SelectCurrency lists
  const currencies = useCurrencies();

  /* Currency Selected 1 */
  const [selectedCurrency, setSelectedCurrency] = useState(null);
  const handleSelectCurrency = e => {
      setSelectedCurrency(e.target.value);
  } 

  /* Currency Selected 2 */
  const [selectedCurrency2, setSelectedCurrency2] = useState(null);
  const handleSelectCurrency2 = e => {
      setSelectedCurrency2(e.target.value);
  } 

  /* Currency Comparisons */
  const currencyComparison = useCompareCurrencies(selectedCurrency, selectedCurrency2);

  /* Mutliplier Value */
  const [multiplier, setMultiplier] = useState(1);
  const handleMultiplier = e => {
    setMultiplier(e.target.value);
  }
  console.log(`Multiplier: ${multiplier}`)

  /* Logic for creating list
  let currencyComparisonArray = Object.entries(currencyComparison);

  currencyComparisonArray = currencyComparisonArray.map((currencyComparison) => {
    return <li key={currencyComparison[0]}>{currencyComparison[0]}: {currencyComparison[1]}</li>
  })
  */

  return (
    <>
      <h1>CurrencyPal</h1>
      <SelectCurrency id="currency1" currencies={currencies} handleSelectCurrency={handleSelectCurrency}></SelectCurrency>
      <input name="number" type="number" value={multiplier} onChange={handleMultiplier}></input>
      <SelectCurrency id="currency2" currencies={currencies} handleSelectCurrency={handleSelectCurrency2}></SelectCurrency>
      
      <CurrencyComparisonHeader currency1={selectedCurrency} currency2={selectedCurrency2} />
      <ResultsDisplay 
        currencyComparison={currencyComparison} 
        currency1={selectedCurrency} 
        currency2={selectedCurrency2}
        multiplier={multiplier} />
    </>
  );
}

export default App;
