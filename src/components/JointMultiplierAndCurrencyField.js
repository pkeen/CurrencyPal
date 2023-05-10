import React, {useState, useRef, useEffect} from 'react';
import { Grid } from '@mui/material';
import MultiplierField from './MultiplierField';
import SelectCurrency from './SelectCurrency';


function JointMultiplierAndCurrencyField( {multiplier, handleMultiplier, currencies, handleSelectCurrency, idNumber} ) {

    const {active, setActive} = useState();

    const multiplierRef = useRef(null);

    // 👇️ check if an element is focused on mount
    useEffect(() => {
        if (document.activeElement === multiplierRef.current) {
        console.log('element has focus');
        } else {
        console.log('element does NOT have focus');
        }
    }, []);


    return (
        <Grid item container xs={12} sm={12} md={6}>
            <Grid item xs={4}>
                <MultiplierField 
                    name={`number${idNumber}`}
                    type="number" 
                    value={multiplier} 
                    handleMutliplier={handleMultiplier}
                    className="subvariant-primary" 
                />
            </Grid>
            <Grid item xs={8}>
                <SelectCurrency 
                    id={`currency${idNumber}`}
                    name={`currency${idNumber}`}
                    currencies={currencies} 
                    handleSelectCurrency={handleSelectCurrency}
                    className="subvariant-primary" 
                />
            </Grid>
        </Grid>
    )
}

export default JointMultiplierAndCurrencyField;