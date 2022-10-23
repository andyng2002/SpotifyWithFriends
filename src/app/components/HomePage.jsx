import React from 'react';
import { Group } from './Group';
import profile from './profile.png';
import Box from '@mui/material/Box'
import { AddGroup } from './AddGroup'
import { Button } from 'react-bootstrap';
import axios from "axios";

export const HomePage = () => {

    const topArtists = () => {
        axios.get("http://localhost:8888/access").then(response => {console.log(response.data)})
    }
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