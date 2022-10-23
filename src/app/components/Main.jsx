import React from 'react';
import { LogIn } from './LogIn';
import Box from '@mui/material/Box';
import { LandingPage } from './LandingPage';
import { Group } from './Group';

export const Main = () => {

    return (
        <Box>
            <LandingPage/>
            <Group/>
        </Box>
    )

}
