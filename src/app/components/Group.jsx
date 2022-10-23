import * as React from 'react'
import Box from '@mui/material/Box'
import { Typography } from '@mui/material'
import profile from './profile.png';

export const Group = (props) => {

    let dad = props.value;

    return (
        <Box>
            <Typography>
                {dad}
            </Typography>
        </Box>
    )
}