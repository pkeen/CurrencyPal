import React, {useState, useEffect} from 'react';
import { CURRENCY_API_BASE } from './utils';

/* API URls */



function useCompareCurrency(currency) {
    const date = "/latest";
    const endpoint = `/currencies/${currency}.json`;    
    const [currencyComparison, setCurrencyComparison] = useState({});
    // I'll leave date for now: const [date, setDate] = useState()

    const getComparisons = async () => {
        const response = await fetch(`${CURRENCY_API_BASE}${date}${endpoint}`);
        const jsonData = await response.json();
        setCurrencyComparison(jsonData[currency]);
    }

    useEffect(() => {
        getComparisons();
    }, [currency]);

    return currencyComparison;

}

export default useCompareCurrency;