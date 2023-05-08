import React, {useState, useEffect} from 'react';
import './App.css';
import useCurrencies from './hooks/useCurrencies';
import useCompareCurrency from './hooks/useCompareCurrency';
import SelectCurrency from './components/SelectCurrency';

const CURRENCY_API_BASE = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1"; //https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@{apiVersion}/{date}/{endpoint}
const date = "/latest";
const endpoint = '/currencies.json';

// First lets display all currencies

function App() {

  const currencies = useCurrencies();

 

  /* Currency Select */
  const [selectedCurrency, setSelectedCurrency] = useState("eur");
  const handleSelectCurrency = e => {
      setSelectedCurrency(e.target.value);
  } 
  console.log(`Selected currency: ${selectedCurrency}`);

  /* Currency Comparisons */
  const currencyComparison = useCompareCurrency(selectedCurrency);

  let currencyComparisonArray = Object.entries(currencyComparison);

  currencyComparisonArray = currencyComparisonArray.map((currencyComparison) => {
    return <li key={currencyComparison[0]}>{currencyComparison[0]}: {currencyComparison[1]}</li>
  })

  /*
  let currenciesArray = Object.entries(currencies);

  currenciesArray = currenciesArray.map((currency) => {
    return <li key={currency[0]}>{currency[1]}</li>
  })
  */

  return (
    <>
      <h1>Currency Checker</h1>
      <SelectCurrency currencies={currencies} handleSelectCurrency={handleSelectCurrency}></SelectCurrency>
      <ul>{currencyComparisonArray}</ul>
    </>
  );
}

export default App;
