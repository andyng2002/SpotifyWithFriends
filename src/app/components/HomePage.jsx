import React from 'react';
import { Group } from './Group';
import profile from './profile.png';
import Box from '@mui/material/Box'
import { Button } from 'react-bootstrap';
import axios from "axios";

export const HomePage = () => {
    
    const topArtists = () => {
        axios.get("http://localhost:8888/access").then(response => {console.log(response.data)})
    }

    return(
        <Box>
            <Group img={profile} name = {"test"}></Group>
            <Box>
                <Button onClick={topArtists}>artists</Button>
            </Box>
        </Box>
    )
}