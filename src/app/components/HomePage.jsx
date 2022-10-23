import React from 'react';
import { Group } from './Group';
import profile from './profile.png';
import Box from '@mui/material/Box'
import { AddGroup } from './AddGroup'

export const HomePage = () => {
    return(
        <Box>
            {/* <Box>
                <AddGroup/>
            </Box> */}
            <Box>
                <Group img={profile} name = {"Aiden's Group"} members={'aiden anh andy tyler kenys'}></Group>
            </Box>
        </Box>
    )

}