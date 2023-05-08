import React, {useState, useEffect} from 'react';

/* API URls */
const CURRENCY_API_BASE = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1"; //https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@{apiVersion}/{date}/{endpoint}
const date = "/latest";
const endpoint = '/currencies.json';

function useCurrencies() {
    const [currencies, setCurrencies] = useState({});

    useEffect(() => {
        getCurrencies();
      }, []);
    
    const getCurrencies = async () => {
        const response = await fetch(`${CURRENCY_API_BASE}${date}${endpoint}`)
        const jsonData = await response.json();
        setCurrencies(jsonData);
    };
    
    return currencies;
}

export default useCurrencies;