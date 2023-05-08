import React from 'react';

function CurrencyComparisonHeader({currency1, currency2}) {
    //hide this component if currency1 is not selected
    return (
        <h2>Comparing {currency1 ? currency1.toUpperCase() : 'select'} to {currency2 ? currency2.toUpperCase() : 'all currencies'}</h2>
    )
}

export default CurrencyComparisonHeader;