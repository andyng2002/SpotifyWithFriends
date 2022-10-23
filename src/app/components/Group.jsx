import * as React from 'react'
import Box from '@mui/material/Box'
import { Typography } from '@mui/material'
import PropTypes from 'prop-types'
import profile from './profile.png';

export const Group = ({ title, pic, members }) => {


    return (
        <Box>
            <Box>
                <img src={pic} alt='profile' />
            </Box>
        </Box>
    )
}