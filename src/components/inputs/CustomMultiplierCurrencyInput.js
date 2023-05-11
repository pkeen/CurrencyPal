import React, {useState} from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import SelectCurrency from './SelectCurrency';

export default function CustomizedInputBase( {currencies}) {

  const [focused, setFocused] = useState(false);

  function handleFocus() {
    setFocused(true)
  }

  function handleBlur() {
    setFocused(false)
  }

  return (
    <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400, borderRadius: '8px'}}
      onFocus={handleFocus}
      onBlur={handleBlur}
      className={focused ? "primary-color focused" : "primary-color"}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Amount"
        inputProps={{ 'aria-label': 'Currency amount' }}
      />
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <SelectCurrency currencies={currencies} />
    </Paper>
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
