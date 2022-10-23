import React, { useState } from "react";
import {
    Navbar,
    Nav,
    Container,
} from "react-bootstrap";
import axios from "axios";
import Box from '@mui/material/Box'
import { Typography } from '@mui/material'

export const NavBar = () => {
    // const [show, setShow] = useState(false);
    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);

    const addGroup = () => {
        axios.get("http://localhost:8888/creategroup");
    }

    return (
        <div>
            <Navbar bg='light' variant='dark' style={{display:"inline"}}>
                <Container>
                        <Box
                            display='flex'
                            backgroundColor='pink'
                            flex='1'
                            height='5%'
                            flexDirection='row'
                            sx={{ justifyContent: 'space-evenly' }}>

                            <Nav.Link to="/home">
                                <h2>home</h2>
                            </Nav.Link>
                            
                            <Nav.Link to="/yourdata" onClick={addGroup}>
                                <h2>your data</h2>
                            </Nav.Link>

                            <Nav.Link to="/log-out">
                                <h2>log out</h2>
                            </Nav.Link>
                        </Box>
                </Container>
            </Navbar>
        </div>
    ) 
}