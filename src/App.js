import React, {useState, useEffect} from 'react';
import './App.css';
import useCurrencies from './hooks/useCurrencies';
import useCompareCurrencies from './hooks/useCompareCurrencies';
import SelectCurrency from './components/SelectCurrency';
import CurrencyComparisonHeader from './components/CurrencyComparisonHeader';

function App() {

  // Get currencies for select list
  const currencies = useCurrencies();

  /* Currency Selected */
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

  /* Logic for creating list */
  let currencyComparisonArray = Object.entries(currencyComparison);

  currencyComparisonArray = currencyComparisonArray.map((currencyComparison) => {
    return <li key={currencyComparison[0]}>{currencyComparison[0]}: {currencyComparison[1]}</li>
  })

  return (
    <>
      <h1>Currency Checker</h1>
      <SelectCurrency id="currency1" currencies={currencies} handleSelectCurrency={handleSelectCurrency}></SelectCurrency>
      <SelectCurrency id="currency2" currencies={currencies} handleSelectCurrency={handleSelectCurrency2}></SelectCurrency>
      <CurrencyComparisonHeader currency1={selectedCurrency} currency2={selectedCurrency2} />
      <ul>{currencyComparisonArray}</ul>
    </>
  );
}

export default App;
