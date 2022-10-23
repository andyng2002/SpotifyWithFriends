import React from 'react'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box'
import add from './plus.png'

export const CreateButton = () => {

    return (
        <Button onClick={createGroup}>
            <img src={add} style={{width:'80px',}}/>
        </Button>
  )
}
