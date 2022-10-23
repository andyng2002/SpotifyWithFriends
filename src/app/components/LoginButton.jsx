import React from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button';

export const LoginButton = () => {
  return (
    <Box>
        <Button 
        variant='contained' 
        sx={{ backgroundColor:'green',border:'1px black solid'}}
        href='#contained-buttons'>
            Login
        </Button>
    </Box>
  )
}
