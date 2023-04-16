import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const InputWithNextButton = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleNextButtonClick = () => {
    console.log('Next button clicked, input value:', inputValue);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 2,
      }}
    >
      <TextField
        label="Input"
        value={inputValue}
        onChange={handleInputChange}
        variant="outlined"
      />
      <Button variant="contained" color="primary" onClick={handleNextButtonClick}>
        Next
      </Button>
    </Box>
  );
};

export default InputWithNextButton;
