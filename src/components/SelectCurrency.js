import React from 'react';

function SelectCurrency({currencies}) {

    let currenciesArray = Object.entries(currencies);

    currenciesArray = currenciesArray.map((currency) => {
        return <option value={currency[0]}>{currency[1]}</option>
    });

    return (
        <form>
            <select name="currency">
                {currenciesArray}
            </select>
        </form>
        
    )
}

export default SelectCurrency;