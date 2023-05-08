import React, {useState} from 'react';


function SelectCurrency({currencies, handleSelectCurrency}) {

    /* Currency options */
    let currenciesArray = Object.entries(currencies);

    currenciesArray = currenciesArray.map((currency) => {
        return ( <option 
                    key={currency[0]} 
                    value={currency[0]}>
                        {currency[0].toUpperCase()}: {currency[1]}
                    </option>
        )
    });

    

    return (
        <form>
            <select name="currency" onChange={handleSelectCurrency}>
                {currenciesArray}
            </select>
        </form>
        
    )
}

export default SelectCurrency;