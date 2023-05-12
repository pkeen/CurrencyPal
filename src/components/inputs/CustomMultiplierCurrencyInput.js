import React, {useState} from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import SelectCurrency from './SelectCurrency';
import MultiplierField from './MultiplierField';


export default function CustomMultiplierCurrencyInput( {currencies, multiplier, handleSelectCurrency, handleMultiplier, idNumber, className, menuVariant, boxShadowIndex}) {

  // Handle state logic for focusing                 
  const [focused, setFocused] = useState(false);

  function handleFocus() {
    setFocused(true)
  }

  function handleBlur() {
    setFocused(false)
  }

  return (
    <Grid item container xs={12} sm={12} md={6}>
      <Paper
        sx={{ display: 'flex', alignItems: 'center', flex: 1, borderRadius: 2, ml: 0}}
        elevation={boxShadowIndex}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className={focused ? `${className} focused` : className}
      > 
        <MultiplierField value={multiplier} handleMultiplier={handleMultiplier}  />
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        <SelectCurrency sx={{flex:'1 1 100px'}} currencies={currencies} handleSelectCurrency={handleSelectCurrency} menuVariant={menuVariant}/>
      </Paper>
    </Grid>
  );
}
  /*
export default function CustomizedInputBase() {
  return (
    <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
    >
      <IconButton sx={{ p: '10px' }} aria-label="menu">
        <MenuIcon />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search Google Maps"
        inputProps={{ 'aria-label': 'search google maps' }}
      />
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions">
        <DirectionsIcon />
      </IconButton>
    </Paper>
  );
}
*/
