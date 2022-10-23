import * as React from 'react'
import Box from '@mui/material/Box'
import { Typography } from '@mui/material'

export const Group = (props) => {

    return (
        <Box
        display='flex'
        flexDirection='row'
        margin='20px'
        >
            <Box
            >
                <img src={props.img} style={{width:"100px"}}/>
            </Box>
            <Box
            margin='5px'
            >
                <Typography fontSize='30px'>{props.name}</Typography>
                <Typography fontsize='10px'>{props.members}</Typography>
            </Box>
        </Box>
    )
}