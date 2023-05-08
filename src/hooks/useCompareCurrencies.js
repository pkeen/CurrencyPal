import React, {useState, useEffect} from 'react';
import { CURRENCY_API_BASE } from './utils';

function useCompareCurrencies(currency1, currency2) {
    const [currencyComparison, setCurrencyComparison] = useState({});
    const date = "/latest";
    const endpoint = currency2 ? `/currencies/${currency1}/${currency2}.json` : `/currencies/${currency1}.json`; 
    

    const getComparisons = async () => {
        const response = await fetch(`${CURRENCY_API_BASE}${date}${endpoint}`);
        const jsonData = await response.json();
        if (currency2) {
            setCurrencyComparison({[currency2]: jsonData[currency2]});
        } else {
            setCurrencyComparison(jsonData[currency1]);
        }
    }

    useEffect(() => {
        getComparisons();
    }, [currency1, currency2])

    return currencyComparison;

}

export default useCompareCurrencies;