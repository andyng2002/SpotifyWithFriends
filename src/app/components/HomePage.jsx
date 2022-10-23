import React from 'react';
import { Group } from './Group';
import profile from './profile.png';
import Box from '@mui/material/Box'

export const HomePage = () => {
    
    return(
        <Box>
            <Group value={profile}></Group>
        </Box>
    )
}