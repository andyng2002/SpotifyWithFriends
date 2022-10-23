import React, { useState } from "react";
import {
    Navbar,
    Nav,
    Container,
} from "react-bootstrap";
import axios from "axios";
import { LinkContainer } from "react-router-bootstrap";
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
                            <Nav className="me-auto flex-column">
                                <LinkContainer to="/home">
                                    <Nav.Link >
                                        <h2>home</h2>
                                    </Nav.Link>
                                </LinkContainer>
                                
                                <LinkContainer to="/yourdata">
                                    <Nav.Link >
                                        <h2>your data</h2>
                                    </Nav.Link>
                                </LinkContainer>
                                <LinkContainer to="/log-out">
                                    <Nav.Link >
                                        <h2>log out</h2>
                                    </Nav.Link>
                                </LinkContainer>
                            </Nav>
                        </Box>
                </Container>
            </Navbar>
        </div>
    ) 
}