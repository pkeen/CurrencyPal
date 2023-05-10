import React, {useState, useEffect, useRef} from 'react';
import './App.css';
import useCurrencies from './hooks/useCurrencies';
import useCompareCurrencies from './hooks/useCompareCurrencies';
import ResultsDisplay from './components/ResultsDisplay';
import { Container, Grid, ThemeProvider } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import useExchangeRate from './hooks/useExchangeRate';
import theme from './styles/theme';
import HeaderLogo from './components/HeaderLogo';
import ExchangeRateDisplay from './components/ExchangeRateDisplay';
import JointMultiplierAndCurrencyField from './components/JointMultiplierAndCurrencyField';



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
    
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <Container>
          <Grid 
            container 
            spacing={6} 
            style={{ minHeight: '100vh' }}
            direction="column"
            justifyContent='center'
          >
            <Grid item xs={12} >
              <HeaderLogo />
            </Grid>

            <Grid item container spacing={2}>
            
              <JointMultiplierAndCurrencyField 
                multiplier={multiplier} 
                handleMultiplier={handleMultiplier}
                currencies={currencies}
                handleSelectCurrency={handleSelectCurrency}
                idNumber={1}
              />

              <JointMultiplierAndCurrencyField 
                multiplier={multiplier2} 
                handleMultiplier={handleMultiplier2}
                currencies={currencies}
                handleSelectCurrency={handleSelectCurrency2}
                idNumber={2}
              />
              
            </Grid>
            
            
            <Grid item container xs={12} justifyContent={'center'}>
              <ResultsDisplay 
              currencyComparison={currencyComparison} 
              currency1={selectedCurrency} 
              currency2={selectedCurrency2}
              multiplier={multiplier} 
              multiplier2={multiplier2}/>
            </Grid>

            
             <ExchangeRateDisplay exchangeRate={exchangeRate} />
            
          </Grid>
        </Container>
        </CssBaseline>
    </ThemeProvider>
    
    </>
  );
}

export default App;
