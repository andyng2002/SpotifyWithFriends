import * as React from 'react'
import Box from '@mui/material/Box'
import { Typography } from '@mui/material'

export const Group = (props) => {

    return (
        <Box>
            <img src={props.img} style={{width:"100px"}}/>
            <Typography>{props.name}</Typography>
        </Box>
    )
}