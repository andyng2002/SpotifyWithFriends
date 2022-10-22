import * as React from 'react'
import Box from '@mui/material/Box'
import { Typography } from '@mui/material'
import { Group } from './Group'

export const LandingPage = () => {


    return (
        <Box>
            <Typography>
                Spotify w/ Friends
            </Typography>
            <Group></Group>
            <Group></Group>
            <Box>
                <Group></Group>
            </Box>
        </Box>
    )
}
