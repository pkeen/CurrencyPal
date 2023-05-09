import React, {useState, useEffect} from 'react';
import { CURRENCY_API_BASE } from './utils';

const useExchangeRate = (currency1, currency2) => {
    
    const [exchangeRate, setExchangeRate] = useState();
    const date = "/latest";
    const endpoint = `/currencies/${currency1}/${currency2}.json`;

    const apiCall = async () => {
        try {
            const response = await fetch(`${CURRENCY_API_BASE}${date}${endpoint}`);
            const jsonData = await response.json();
            setExchangeRate(jsonData[currency2]);
        } catch(e) {
            console.error(e);
        }
    }

    useEffect(() => {
        apiCall();
    }, [currency1, currency2])

    return exchangeRate;
}

export default useExchangeRate;