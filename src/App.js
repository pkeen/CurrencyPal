import React, {useState, useEffect} from 'react';
import './App.css';
import useCurrencies from './hooks/useCurrencies';
import SelectCurrency from './components/SelectCurrency';

const CURRENCY_API_BASE = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1"; //https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@{apiVersion}/{date}/{endpoint}
const date = "/latest";
const endpoint = '/currencies.json';

// First lets display all currencies

function App() {

  const currencies = useCurrencies();

  let currenciesArray = Object.entries(currencies);

  currenciesArray = currenciesArray.map((currency) => {
    return <li key={currency[0]}>{currency[1]}</li>
  })

  return (
    <>
      <h1>Currency Checker</h1>
      <SelectCurrency currencies={currencies}></SelectCurrency>
      <ul>{currenciesArray}</ul>
    </>
  );
}

export default App;
