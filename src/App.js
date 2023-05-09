import React, {useState, useEffect, useRef} from 'react';
import './App.css';
import useCurrencies from './hooks/useCurrencies';
import useCompareCurrencies from './hooks/useCompareCurrencies';
import SelectCurrency from './components/SelectCurrency';
import CurrencyComparisonHeader from './components/CurrencyComparisonHeader';
import ResultsDisplay from './components/ResultsDisplay';
import MultiplierField from './components/MultiplierField';
import SelectField from './components/SelectField';
import { Container, Grid, ThemeProvider } from '@mui/material';
import {Typography} from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import useExchangeRate from './hooks/useExchangeRate';
import {theme} from './styles/theme';
import HeaderLogo from './components/HeaderLogo';



function App() {

  // Get currencies for SelectCurrency lists
  const currencies = useCurrencies();

  /* Currency Selected 1 */
  const [selectedCurrency, setSelectedCurrency] = useState(null);
  const handleSelectCurrency = e => {
      setSelectedCurrency(e.target.value);
  } 

  /* Currency Selected 2 */
  const [selectedCurrency2, setSelectedCurrency2] = useState(null);
  const handleSelectCurrency2 = e => {
      setSelectedCurrency2(e.target.value);
  } 

  /* useExchangeRate */
  const exchangeRate = useExchangeRate(selectedCurrency, selectedCurrency2);

  /* Currency Comparisons */
  const currencyComparison = useCompareCurrencies(selectedCurrency, selectedCurrency2);
  
  /* Mutliplier Value */
  const [multiplier, setMultiplier] = useState(1);
  const [multiplier2, setMultiplier2] = useState(1);
  const multiplierRef = useRef(1);
  const multiplier2Ref = useRef(1);

  const handleMultiplier = e => {
    setMultiplier(e.target.value);
    multiplierRef.current = e.target.value;
  }

  const handleMultiplier2 = e => {
    setMultiplier2(e.target.value);
    multiplier2Ref.current = e.target.value;
  }

  useEffect(() => {
    if (multiplier !== multiplierRef.current || multiplier2 === multiplier2Ref.current){
      setMultiplier(multiplier2 * (1 / exchangeRate))
    }
  }, [multiplier2, exchangeRate])
  

  useEffect(() => {
    if (multiplier2 !== multiplier2Ref.current || multiplier === multiplierRef.current) {
      setMultiplier2(multiplier * exchangeRate)
    } 
  }, [multiplier, exchangeRate])

  

  return (
    <>
    <CssBaseline>
    <ThemeProvider theme={theme}>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <HeaderLogo />
          </Grid>

          <Grid item container xs={6}>
            <Grid item xs={4}>
              <MultiplierField name="number" type="number" value={multiplier} handleMutliplier={handleMultiplier}></MultiplierField>
            </Grid>
            <Grid item xs={8}>
              <SelectCurrency id="currency1" name="currency1" currencies={currencies} handleSelectCurrency={handleSelectCurrency}></SelectCurrency>
            </Grid>
          </Grid>
          
          <Grid item container xs={6}>
            <Grid item xs={4}>
              <MultiplierField name="number2" type="number" value={multiplier2} handleMutliplier={handleMultiplier2}></MultiplierField>
            </Grid>
            <Grid item xs={8}>
              <SelectCurrency id="currency2" currencies={currencies} handleSelectCurrency={handleSelectCurrency2}></SelectCurrency>
            </Grid>
          </Grid>
          
          
          <Grid item xs={12}>
            <CurrencyComparisonHeader currency1={selectedCurrency} currency2={selectedCurrency2} />
          </Grid>
          <Grid item xs={12}>
            <Typography sx={{textAlign: 'center'}}>Exchange rate: {exchangeRate}</Typography>
          </Grid>
          <Grid item xs={12}>
            <ResultsDisplay 
            currencyComparison={currencyComparison} 
            currency1={selectedCurrency} 
            currency2={selectedCurrency2}
            multiplier={multiplier} />
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
    </CssBaseline>
    </>
  );
}

export default App;
