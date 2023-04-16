import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

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
        height: '100vh',
        width: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
      }}
    >
      <Paper
        elevation={3}
        sx={{
          padding: 2,
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          alignItems: 'center',
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
      </Paper>
    </Box>
  );
};

export default InputWithNextButton;
