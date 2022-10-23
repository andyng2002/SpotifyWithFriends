import * as React from 'react'
import Box from '@mui/material/Box'
import { Typography } from '@mui/material'
import profile from './profile.png';

export const Group = () => {


    return (
        <Box>
            <Box>
                <img src={profile} alt='profile' />
            </Box>
        </Box>
    )
}